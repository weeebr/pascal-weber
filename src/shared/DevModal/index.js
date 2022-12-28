import React from 'react';
import closeIcon from '../../assets/close.svg';
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

export const DevModal = ({ openIndex, setOpenIndex }) => {
  const [imageIndex, setImageIndex] = React.useState(null);
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
  
  return (
    <CSSTransition
      in={!!project}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <>
      <ModalWrapper isMobile={isMobile}>
        {project && (
          <>
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
              <ButtonsWrapper isMobile={isMobile}>
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


