import React from 'react';
import { StyledButton } from "./styles";
import { Link } from "react-router-dom";
import { isDesignPage } from "shared/hooks";

export const PageToggle = () => {
  const [ pressed, setPressed] = React.useState(false);
  const isDesign = isDesignPage();
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