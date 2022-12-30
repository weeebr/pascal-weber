import React from 'react';
import { ModalWrapper, 
  ModalContent, 
  ProjectImage, 
  ProjectImagesWrapper, 
  ButtonsWrapper,
} from './styles';
import { ImageFullScreen } from "../../components/ImageFullScreen";
import { CSSTransition } from "react-transition-group";
import { UrlIcon, EyeIcon } from "shared/icons";
import { useMediaQuery, useSession } from "shared/hooks";
import { PrevIcon, NextIcon, CloseIcon } from 'shared/icons';
import { projects } from 'shared/constants';
import { theme } from 'shared/theme';
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { swipeIcon } from "shared/icons";

const SwipeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: auto;
  background: ${theme.colors.background.main};
  z-index: 20;
  padding: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 8px;
    width: 20px;
  }
`;

export const SwipeNotification = ({ avoidNotification }) => {
  const [ isTouch, setTouch ] = React.useState(null);
  const [modalOpened, setModalOpened] = useSession('modal-opened', null);

  React.useEffect(() => {
    const isTouchDevice = async () => {
      return ('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0)
    }
    isTouchDevice().then(is => { setTouch(is) })
  }, [])

  React.useEffect(() => {
    if (modalOpened) {
      setTimeout(() => {
        setModalOpened(false);
      }, 4000);
    }

    if (modalOpened === null && !avoidNotification) {
      setTimeout(() => {
        setModalOpened(true)
      }, 5000);
    }
  }, [modalOpened, setModalOpened, avoidNotification])

  return modalOpened && isTouch && !avoidNotification && (
    <SwipeWrapper>
      <img src={swipeIcon} alt="swipe" />
      Hey good-looking! Swipe if you like what you see 💦🔥
    </SwipeWrapper>
  )
}

export const DevModal = ({ openIndex, setOpenIndex }) => {
  const [imageIndex, setImageIndex] = React.useState(null);
  const [ hasSwiped, setHasSwiped ] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 880px)');
  const project = projects[openIndex];
  const nextIndex = (openIndex + 1) % projects.length;
  const prevIndex = ((openIndex - 1) % projects.length + projects.length) % projects.length;
  const navigate = useNavigate();

  const prevTitle = projects[prevIndex]?.title;
  const nextTitle = projects[nextIndex]?.title;
  const setPrevIndex = () => { setOpenIndex(prevIndex); navigate(`/dev/${prevIndex}`); };
  const setNextIndex = () => { setOpenIndex(nextIndex); navigate(`/dev/${nextIndex}`); };

  const handleClose = React.useCallback(() => {
    navigate('/');
  }, [navigate])

  React.useEffect(() => {
    if (!project) {
      handleClose()
    }
  }, [handleClose, project])

   const handlers = useSwipeable({
    onSwipedLeft: () => { setHasSwiped(true); setNextIndex(); },
    onSwipedRight: () => { setHasSwiped(true); setPrevIndex(); },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });
  
  return (
    <CSSTransition
      in={!!project}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <>
      <ModalWrapper {...handlers} className="modal" isMobile={isMobile}>
        {project && (
          <>
            <SwipeNotification avoidNotification={!!hasSwiped} />
            {imageIndex !== null && (
              <ImageFullScreen 
                onClose={() => setImageIndex(null)} 
                project={project}
                imageIndex={imageIndex} 
              />
            )}
            <span className='close' 
              onClick={handleClose}
              onKeyUp={handleClose}
            >
              <CloseIcon fill={theme.colors.primary.main} />
            </span>
            <ModalContent isMobile={isMobile}>
              <span>
                <span className='title'>{project.title}</span>
                <span className='year'>{project.year}</span>  
                {isMobile && <div className='description'>{project.description}</div>}
              </span>
              <div>
                <ProjectImagesWrapper isMobile={isMobile}>
                  {project.images.map((image, idx) => (
                    <ProjectImage 
                      onClick={() => setImageIndex(idx)} 
                      onKeyUp={() => setImageIndex(idx)} 
                      src={image} 
                      key={image} 
                      alt="" 
                    />
                  ))}
                </ProjectImagesWrapper>
                {!isMobile && <div className='description'>{project.description}</div>}
              </div>
              <ButtonsWrapper className="buttons" isMobile={isMobile}>
                <div 
                  onClick={() => setPrevIndex()}
                  onKeyUp={() => setPrevIndex()}
                  className='prev'>
                    <PrevIcon fill="white" />
                    {isMobile ? '' : prevTitle}
                </div>
                <div className='link'>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.more ? (
                      <UrlIcon fill="white" />
                      ) : (
                      <EyeIcon fill="white" />
                    )}
                    {project.more ? 'Read More' : 'View Demo'}
                  </a>
                </div>
                <div 
                  onClick={() => setNextIndex()}
                  onKeyUp={() => setNextIndex()}
                  className='next'
                >
                  {isMobile ? '' : nextTitle} 
                    <NextIcon fill="white" />
                </div>
              </ButtonsWrapper>
            </ModalContent>
          </>
        )}
      </ModalWrapper>
      </>
    </CSSTransition>
  )
}


