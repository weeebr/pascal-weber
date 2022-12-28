import React from 'react';
import closeIcon from '../../assets/close_design.svg';
import { ModalWrapper, ModalContent, Bottom } from './styles';
import { CSSTransition } from "react-transition-group";
import useMediaQuery from "./../useMediaQuery";
import { designs, prevDesignIcon, nextDesignIcon } from './../../constants';
import { useSwipeable } from 'react-swipeable';

export const DesignModal = ({ openIndex, setOpenIndex }) => {
  const isMobile = useMediaQuery('(max-width: 880px)');
  const design = designs[openIndex];
  const nextIndex = (openIndex + 1) % designs.length;
  const prevIndex = ((openIndex - 1) % designs.length + designs.length) % designs.length;
  const setPrevIndex = () => setOpenIndex(prevIndex);
  const setNextIndex = () => setOpenIndex(nextIndex);
  const config = {
    delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
    trackTouch: true,                      // track touch input
    trackMouse: false,                     // track mouse input
    rotationAngle: 0,                      // set a rotation angle
    swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => window.prompt(`User Swiped LLL! ${JSON.stringify(eventData)}`),
    onSwipedRight: (eventData) => window.prompt(`User Swiped RRR! ${JSON.stringify(eventData)}`),
    ...config,
  });

  return (
    <CSSTransition
        in={!!design}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <ModalWrapper {...handlers} isMobile={isMobile}>
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
                <span className='client'>{design.client}</span>
                <span className='description'>{design.description}</span>
                <div className='img' 
                  onClick={() => setOpenIndex(null)}
                  onKeyUp={() => setOpenIndex(null)}
                  alt="" 
                />
                
              </ModalContent>
              <Bottom>
                <div 
                    onClick={() => setPrevIndex()}
                    onKeyUp={() => setPrevIndex()}
                    className='prev'>
                      <img src={prevDesignIcon} alt="next" />
                  </div>
                  <div className='middle'>
                    
                  </div>
                  <div 
                    onClick={() => setNextIndex()}
                    onKeyUp={() => setNextIndex()}
                    className='next'
                  >
                    <img src={nextDesignIcon} alt="next" />
                </div>
              </Bottom>
            </>
          )}
        </ModalWrapper>
      </CSSTransition>
  )
}

