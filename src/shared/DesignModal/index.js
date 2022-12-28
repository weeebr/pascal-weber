import React from 'react';
import closeIcon from '../../assets/close_design.svg';
import { ModalWrapper, ModalContent, Bottom } from './styles';
import { CSSTransition } from "react-transition-group";
import useMediaQuery from "./../useMediaQuery";
import { designs, prevDesignIcon, nextDesignIcon } from './../../constants';
import { useSwipeable } from 'react-swipeable';
import { SwipeNotification } from "./../DevModal/index";

export const DesignModal = ({ openIndex, setOpenIndex }) => {
  const isMobile = useMediaQuery('(max-width: 880px)');
  const design = designs[openIndex];
  const [ hasSwiped, setHasSwiped ] = React.useState(false);
  const nextIndex = (openIndex + 1) % designs.length;
  const prevIndex = ((openIndex - 1) % designs.length + designs.length) % designs.length;
  const setPrevIndex = () => setOpenIndex(prevIndex);
  const setNextIndex = () => setOpenIndex(nextIndex);

  const handlers = useSwipeable({
    onSwipedLeft: () => { setHasSwiped(true); setNextIndex(); },
    onSwipedRight: () => { setHasSwiped(true); setPrevIndex(); },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
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
            <SwipeNotification avoidNotification={!!hasSwiped} />
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
