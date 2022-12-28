import React from 'react';
import closeIcon from '../../assets/close.svg';
import { ModalWrapper, 
  ModalContent, 
  ProjectImage, 
  ProjectImagesWrapper, 
  ButtonsWrapper 
} from './styles';
import { CSSTransition } from "react-transition-group";
import { UrlIcon, EyeIcon } from "./../../constants";
import useMediaQuery from "../useMediaQuery";
import { projects, prevIcon, nextIcon } from './../../constants';

export const DevModal = ({ openIndex, setOpenIndex }) => {
  const isMobile = useMediaQuery('(max-width: 880px)');
  const project = projects[openIndex];
  const nextIndex = (openIndex + 1) % projects.length;
  const prevIndex = ((openIndex - 1) % projects.length + projects.length) % projects.length;

  const prevTitle = projects[prevIndex]?.title;
  const nextTitle = projects[nextIndex]?.title;
  const setPrevIndex = () => setOpenIndex(prevIndex);
  const setNextIndex = () => setOpenIndex(nextIndex);
console.log(prevIndex, prevTitle)
  return (
    <CSSTransition
        in={!!project}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <ModalWrapper isMobile={isMobile}>
          {project && (
            <>
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
              </span>
              <div>
                <ProjectImagesWrapper isMobile={isMobile}>
                  {project.images.map(image => (
                    <ProjectImage src={image} key={image} alt="" />
                  ))}
                </ProjectImagesWrapper>
                <div className='description'>{project.description}</div>
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

              </div>
              </ModalContent>
            </>
          )}
        </ModalWrapper>
      </CSSTransition>
  )
}

