import { CSSTransition } from "react-transition-group";
import { FullScreenWrapper } from "./styles";
import { useThemeBreakpoints } from "shared/hooks";
import { CloseIcon } from 'shared/icons';
import { theme } from 'shared/theme';

export const ImageFullScreen = ({ imageIndex, project, onClose }) => {
  const src = project.images[imageIndex]
  const { isMobile } = useThemeBreakpoints();
  
  return (
    <CSSTransition
      in={!!src}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <FullScreenWrapper isMobile={isMobile} onClick={onClose} src={src}>
        <div />
        <span><CloseIcon fill={theme.colors.primary.main} /></span>
      </FullScreenWrapper>
    </CSSTransition>
  )
}