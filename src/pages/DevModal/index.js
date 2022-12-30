import React from 'react';
import { ModalWrapper, 
  ModalContent, 
  ProjectImage, 
  ProjectImagesWrapper, 
  ButtonsWrapper,
} from './styles';
import { ImageFullScreen } from "components/ImageFullScreen";
import { SwipeNotification } from "components/SwipeNotification";
import { CSSTransition } from "react-transition-group";
import { UrlIcon, EyeIcon } from "shared/icons";
import { useThemeBreakpoints } from "shared/hooks";
import { PrevIcon, NextIcon, CloseIcon } from 'shared/icons';
import { projects } from 'shared/constants';
import { theme } from 'shared/theme';
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

export const DevModal = ({ openIndex, setOpenIndex }) => {
  const [ imageIndex, setImageIndex] = React.useState(null);
  const [ hasSwiped, setHasSwiped ] = React.useState(false);
  const { isMobile } = useThemeBreakpoints();
  const project = projects[openIndex];
  const navigate = useNavigate();
  
  const nextIndex = (openIndex + 1) % projects.length;
  const prevIndex = ((openIndex - 1) % projects.length + projects.length) % projects.length;
  const prevTitle = projects[prevIndex]?.title;
  const nextTitle = projects[nextIndex]?.title;
  const setPrevIndex = () => { setOpenIndex(prevIndex); navigate(`/dev/${prevIndex}`); };
  const setNextIndex = () => { setOpenIndex(nextIndex); navigate(`/dev/${nextIndex}`); };

   const handlers = useSwipeable({
    onSwipedLeft: () => { setHasSwiped(true); setNextIndex(); },
    onSwipedRight: () => { setHasSwiped(true); setPrevIndex(); },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const handleClose = React.useCallback(() => {
    navigate('/');
  }, [navigate])

  React.useEffect(() => {
    if (!project) {
      handleClose()
    }
  }, [handleClose, project])

  
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
            {imageIndex !== null && (
              <ImageFullScreen 
                onClose={() => setImageIndex(null)} 
                project={project}
                imageIndex={imageIndex} 
              />
            )}
            <SwipeNotification avoidNotification={!!hasSwiped} />
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


