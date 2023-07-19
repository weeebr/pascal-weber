import { CSSTransition } from "react-transition-group";
import { FullScreenWrapper } from "./styles";
import { useTheme } from "shared/hooks";
import { CloseIcon } from 'shared/icons';
import { theme } from 'shared/theme';

export const ImageFullScreen = ({ imageIndex, project, onClose }) => {
  const src = project.images[imageIndex]
  const { isMobile, darkClass, isDarkTheme } = useTheme();
  
  return (
    <CSSTransition
      in={!!src}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <FullScreenWrapper className={darkClass} isMobile={isMobile} onClick={onClose} src={src}>
        <div />
        <span><CloseIcon fill={isDarkTheme ? "white" : theme.colors.primary.main} /></span>
      </FullScreenWrapper>
    </CSSTransition>
  )
}