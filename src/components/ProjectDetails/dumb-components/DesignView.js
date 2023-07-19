import React from 'react';
import { useThemeBreakpoints } from "shared/hooks";
import { CloseIcon, NextIcon, PrevIcon } from 'shared/icons';
import { theme } from 'shared/theme';
import {
  Bottom,
  ModalContent
} from './styles.design';

export const DesignView = ({ project, handleClose, childProps }) => {
  const { isMobile } = useThemeBreakpoints();
  const {
    setPrevIndex,
    setNextIndex,
  } =  childProps;

  return (
      <>
        <span 
          className='close' 
          onClick={handleClose}
          onKeyUp={handleClose}
          >
          <CloseIcon fill={theme.colors.secondary.main} />
        </span>

        <ModalContent src={project.src}>
          <span className='client'>{project.client}</span>
          <span className='description'>{project.title}</span>
          <div className='img' alt="" />
        </ModalContent>

        <Bottom isMobile={isMobile}>
          <div 
              onClick={() => setPrevIndex()}
              onKeyUp={() => setPrevIndex()}
              className='prev'>
                <PrevIcon fill="white" />
            </div>
            <div className='middle'>
              
            </div>
            <div 
              onClick={() => setNextIndex()}
              onKeyUp={() => setNextIndex()}
              className='next'
            >
              <NextIcon fill="white" />
          </div>
        </Bottom>
      </>
  )
}


