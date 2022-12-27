import React from 'react';
import { CSSTransition } from "react-transition-group";

export const Modal = ({ isOpen, type, src, page, setPage }) => {
  return isOpen && (
    <CSSTransition
        in={isOpen}
        timeout={400}
        classNames="fade"
      >
      
      {type === 'design' ? (
        <div src={src} isOpen={isOpen}>
            <div className='img' alt="" />
        </div>
      ) : (
        <div src={src} isOpen={isOpen}>
          <div className='img' alt="" />
        </div>
      )}
    </CSSTransition>
  )
}

