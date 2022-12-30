import { CSSTransition } from "react-transition-group";
import { FullScreenWrapper } from "./styles";
import useMediaQuery from "./../../useMediaQuery";
import { CloseIcon } from '../../../constants';
import { theme } from '../../Theme/typography';

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
        <span><CloseIcon fill={theme.colors.primary} /></span>
      </FullScreenWrapper>
    </CSSTransition>
  )
}