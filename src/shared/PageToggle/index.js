import React from 'react';
import { StyledButton } from "./styles";
import { useLocation, Link } from "react-router-dom";

export const PageToggle = () => {
  const { pathname } = useLocation();
  const [ pressed, setPressed] = React.useState(false);

  const isDesign = pathname.includes('design');
  const otherPage = isDesign ? '/' : '/design';

  React.useEffect(() => {
    if (pressed) {
      setTimeout(() => {
        setPressed(false);
      }, 500);
    }
  }, [pressed])

  return (
      <StyledButton className={pressed ? 'pressed' : ''} onTouchStart={() => setPressed(true)} isDesign={isDesign}>
        <Link to={`${otherPage}`}>
            /{isDesign ? ' Dev' : ' Design'}
        </Link>
      </StyledButton>
  );
}