import React from 'react';
import closeIcon from '../../assets/close.svg';
import swipeIcon from '../../assets/swipe.svg';
import { ModalWrapper, 
  ModalContent, 
  ProjectImage, 
  ProjectImagesWrapper, 
  ButtonsWrapper,
} from './styles';
import { ImageFullScreen } from "./ImageFullScreen";
import { CSSTransition } from "react-transition-group";
import { UrlIcon, EyeIcon } from "./../../constants";
import useMediaQuery from "../useMediaQuery";
import { projects, prevIcon, nextIcon } from './../../constants';
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

const SwipeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: auto;
  background: #f9f9f9;
  z-index: 20;
  padding: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
  }
`;

export const SwipeNotification = ({ avoidNotification }) => {
  const [ isTouch, setTouch ] = React.useState(null);
  const [modalOpened, setModalOpened] = React.useState(
    getSessionStorageOrDefault('modal-opened', null)
  );

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

  const prevTitle = projects[prevIndex]?.title;
  const nextTitle = projects[nextIndex]?.title;
  const setPrevIndex = () => setOpenIndex(prevIndex);
  const setNextIndex = () => setOpenIndex(nextIndex);

  const handleImageClick = idx => {
    setImageIndex(idx)
    console.log(idx)
  }

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
      <ModalWrapper {...handlers} isMobile={isMobile}>
        {project && (
          <>
            <SwipeNotification avoidNotification={!!hasSwiped} />
            {imageIndex !== null && (
              <ImageFullScreen 
                onClose={() => handleImageClick(null)} 
                project={project}
                imageIndex={imageIndex} 
              />
            )}
            <span className='close'>
              <img src={closeIcon} 
                onClick={() => setOpenIndex(null)}
                onKeyUp={() => setOpenIndex(null)}
                alt="" 
              />
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
                      onClick={() => handleImageClick(idx)} 
                      onKeyUp={() => handleImageClick(idx)} 
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
                    <img src={prevIcon} alt="next" />
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
                  <img src={nextIcon} alt="next" />
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


