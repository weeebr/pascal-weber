import React from 'react';
import closeIcon from '../../assets/close_design.svg';
import { ModalWrapper, ModalContent } from './styles';
import { CSSTransition } from "react-transition-group";

export const DesignModal = ({ design, setOpenIndex }) => {
  console.log('pwe', 'design', design)

  return (
    <CSSTransition
        in={!!design}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <ModalWrapper>
          {design && (
            <>
              <span className='close'>
                <img src={closeIcon} 
                  onClick={() => setOpenIndex(null)}
                  onKeyUp={() => setOpenIndex(null)}
                  alt="" 
                />
              </span>
              <ModalContent src={design.src}>
                <div className='img' 
                  onClick={() => setOpenIndex(null)}
                  onKeyUp={() => setOpenIndex(null)}
                  alt="" 
                />
                <span className='client'>{design.client}</span>
                <span className='description'>{design.description}</span>
              </ModalContent>
            </>
          )}
        </ModalWrapper>
      </CSSTransition>
  )
}

