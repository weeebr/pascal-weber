import { CSSTransition } from "react-transition-group";
import { FullScreenWrapper } from "./styles";
import closeIcon from '../../../assets/close.svg';

export const ImageFullScreen = ({ imageIndex, project, onClose }) => {
  const src = project.images[imageIndex]
  console.log(imageIndex, project, src)
  return (
    <CSSTransition
      in={!!src}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <FullScreenWrapper onClick={onClose} src={src}>
        <div />
        <img src={closeIcon} alt="" />
      </FullScreenWrapper>
    </CSSTransition>
  )
}