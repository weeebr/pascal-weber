import { ImageFullScreen } from "components/ImageFullScreen";
import React from 'react';
import { useTheme } from "shared/hooks";
import { CloseIcon, EyeIcon, NextIcon, PrevIcon, UrlIcon } from "shared/icons";
import { theme } from 'shared/theme';
import {
  ButtonsWrapper,
  ModalContent,
  ProjectImage,
  ProjectImagesWrapper
} from './styles.dev';
import { useThemeBreakpoints } from "shared/hooks";

export const ProjectView = ({ project, childProps, handleClose, projectTitles }) => {
  const {
    setPrevIndex,
    setNextIndex,
  } =  childProps;
  const { darkClass, isDarkTheme } = useTheme();
  const { isMobile } = useThemeBreakpoints();
  const [ imageIndex, setImageIndex] = React.useState(null);

  return (
    <>
      {imageIndex !== null && (
        <ImageFullScreen 
          onClose={() => setImageIndex(null)} 
          project={project}
          imageIndex={imageIndex}
          darkClass={darkClass}
        />
      )}
      <span className='close' 
        onClick={handleClose}
        onKeyUp={handleClose}
      >
        <CloseIcon fill={isDarkTheme ? 'white' : theme.colors.primary.main} />
      </span>
      
      <ModalContent className={darkClass} isMobile={isMobile}>
        <span>
          <span className='title'>{project.title}</span>
          <span className='year'>{project.year}</span>  
          {isMobile && <div className='description'>{project.description}</div>}
        </span>
        <div>
          <ProjectImagesWrapper isMobile={isMobile}>
            {project?.images?.map((image, idx) => (
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
              {isMobile ? '' : projectTitles.prev}
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
            {isMobile ? '' : projectTitles.next} 
              <NextIcon fill="white" />
          </div>
        </ButtonsWrapper>
      </ModalContent>
    </>
  )
}


