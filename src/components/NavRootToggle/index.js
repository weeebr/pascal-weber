import React from 'react';
import { StyledButton } from "./styles";
import { Link } from "react-router-dom";
import { usePage, useThemeBreakpoints } from 'shared/hooks';

export const NavRootToggle = () => {
  const [ pressed, setPressed] = React.useState(false);
  const { isDesign, otherRoot } = usePage();
  const { isPhone } = useThemeBreakpoints();

  React.useEffect(() => {
    if (pressed) {
      setTimeout(() => {
        setPressed(false);
      }, 500);
    }
  }, [pressed])

  return (
    <StyledButton 
      className={pressed ? 'pressed' : ''} 
      onTouchStart={() => setPressed(true)} 
      isDesign={isDesign}
      isPhone={isPhone}
    >
      <Link to={`${otherRoot}`}>
          /{isDesign ? ' Dev' : ' Design'}
      </Link>
    </StyledButton>
  );
}