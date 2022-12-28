import { CSSTransition } from "react-transition-group";
import { FullScreenWrapper } from "./styles";
import closeIcon from '../../../assets/close.svg';
import useMediaQuery from "./../../useMediaQuery";

export const ImageFullScreen = ({ imageIndex, project, onClose }) => {
  const src = project.images[imageIndex]
  const isMobile = useMediaQuery('(max-width: 880px)');
  
  return (
    <CSSTransition
      in={!!src}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <FullScreenWrapper isMobile={isMobile} onClick={onClose} src={src}>
        <div />
        <img src={closeIcon} alt="" />
      </FullScreenWrapper>
    </CSSTransition>
  )
}