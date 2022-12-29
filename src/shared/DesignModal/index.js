import React from 'react';
import { ModalWrapper, ModalContent, Bottom } from './styles';
import { CSSTransition } from "react-transition-group";
import useMediaQuery from "./../useMediaQuery";
import { designs, PrevIcon, NextIcon, CloseIcon } from './../../constants';
import { useSwipeable } from 'react-swipeable';
import { SwipeNotification } from "./../DevModal/index";
import { useNavigate, useParams } from "react-router-dom";

export const DesignModal = ({ openIndex, setOpenIndex }) => {
  const isMobile = useMediaQuery('(max-width: 880px)');
  const design = designs[openIndex];
  const [ hasSwiped, setHasSwiped ] = React.useState(false);
  const nextIndex = (openIndex + 1) % designs.length;
  const prevIndex = ((openIndex - 1) % designs.length + designs.length) % designs.length;
  const setPrevIndex = () => { setOpenIndex(prevIndex); navigate(`/design/${prevIndex}`); };
  const setNextIndex = () => { setOpenIndex(nextIndex); navigate(`/design/${nextIndex}`); };
  const { id } = useParams();
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => { setHasSwiped(true); setNextIndex(); },
    onSwipedRight: () => { setHasSwiped(true); setPrevIndex() },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const handleClose = React.useCallback(() => {
    navigate('/design');
  }, [navigate])

  React.useEffect(() => {
    setOpenIndex(id ? parseInt(id) : null);
  }, [id, setOpenIndex]) 

  React.useEffect(() => {
    if (!design) {
      handleClose()
    }
  }, [design, handleClose])

  return (
    <CSSTransition
        in={!!design}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <ModalWrapper className="modal" {...handlers} isMobile={isMobile}>
          {design && (
            <>
            <SwipeNotification avoidNotification={!!hasSwiped} />
              <span 
                className='close' 
                onClick={handleClose}
                onKeyUp={handleClose}
                >
                <CloseIcon fill="#bf9000" />
              </span>
              <ModalContent src={design.src}>
                <span className='client'>{design.client}</span>
                <span className='description'>{design.description}</span>
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
          )}
        </ModalWrapper>
      </CSSTransition>
  )
}
