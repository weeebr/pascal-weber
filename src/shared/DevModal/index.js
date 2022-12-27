import React from 'react';
import closeIcon from '../../assets/close.svg';
import { ModalWrapper, ModalContent, ProjectImage } from './styles';
import { CSSTransition } from "react-transition-group";
import { UrlIcon, EyeIcon } from "./../../constants";

export const DevModal = ({  project, setOpenIndex }) => {
  console.log('pwe', 'project', project)

  return (
    <CSSTransition
        in={!!project}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <ModalWrapper>
          {project && (
            <>
              <span className='close'>
                <img src={closeIcon} 
                  onClick={() => setOpenIndex(null)}
                  onKeyUp={() => setOpenIndex(null)}
                  alt="" 
                />
            </span>
            <ModalContent>
              <span>
                <span className='title'>{project.title}</span>
                <span className='year'>{project.year}</span>  
              </span>
              <div>
                <span className='images'>
                  {project.images.map(image => (
                    <ProjectImage src={image} key={image} alt="" />
                  ))}
                </span>
                <div className='description'>{project.description}</div>
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
              </div>
              </ModalContent>
            </>
          )}
        </ModalWrapper>
      </CSSTransition>
  )
}

