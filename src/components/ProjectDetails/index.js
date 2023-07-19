import React from 'react';
import { ModalWrapper } from './styles';
import { CSSTransition } from "react-transition-group";
import { useProjectData, useTheme, useThemeBreakpoints, usePage } from "shared/hooks";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import { ProjectView } from "./dumb-components/ProjectView"
import { DesignView } from "./dumb-components/DesignView"
import { SwipeableNotification } from "components/SwipeableNotification";

export const ProjectDetails = () => {
  const handlers = useSwipeable({
    onSwipedLeft: () => { setHasSwiped(true); setNextIndex(); },
    onSwipedRight: () => { setHasSwiped(true); setPrevIndex(); },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const navigate = useNavigate();
  const { darkClass } = useTheme();
  const { isMobile } = useThemeBreakpoints();
  const { data, project, openIndex, setOpenIndex } = useProjectData();
  const { rootUrl, isDev } = usePage();
  const [ fade, setFade] = React.useState(false);
  const [ hasSwiped, setHasSwiped ] = React.useState(false);

  
  const nextIndex = (openIndex + 1) % data.length;
  const prevIndex = ((openIndex - 1) % data.length + data.length) % data.length;
  const prevTitle = data[prevIndex]?.title;
  const nextTitle = data[nextIndex]?.title;
  const setPrevIndex = () => { setOpenIndex(prevIndex); console.log(`/${rootUrl}${prevIndex}`); navigate(`/${rootUrl}${prevIndex}`); };
  const setNextIndex = () => { setOpenIndex(nextIndex); navigate(`/${rootUrl}${nextIndex}`); };
 
  const handleClose = React.useCallback(() => {
    navigate("/" + rootUrl);
  }, [rootUrl, navigate])

  React.useEffect(() => {
    setFade(true)
  }, [])

  const projectTitles = {
    prev: prevTitle,
    next: nextTitle
  }

  const childProps = {
    nextIndex,
    prevIndex,
    setPrevIndex,
    setNextIndex,
  }

  return (
   
    <CSSTransition
      in={!!project}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <>
      <ModalWrapper 
        {...handlers}
        className={`modal ${darkClass}`}
        fade={fade}
        isDev={isDev}
        isMobile={isMobile}
      >
        <>
          <SwipeableNotification avoidNotification={!!hasSwiped} />
          {project && isDev && (
            <ProjectView 
              project={project} 
              handleClose={handleClose} 
              childProps={childProps} 
              projectTitles={projectTitles} 
            />
          )}
          {project && !isDev && (
            <DesignView 
              childProps={childProps} 
              handleClose={handleClose} 
              project={project} 
            />
          )}
        </>
      </ModalWrapper>
      </>
    </CSSTransition>
  )
}


