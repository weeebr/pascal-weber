import React, { useState } from 'react';
import { StyledButton } from "./styles";
import { useLocation, Link } from "react-router-dom";

export const PageToggle = () => {
  const { pathname } = useLocation();

  const otherPage = pathname === '/design' ? '/' : '/design';

  return (
      <StyledButton page={pathname}>
        <Link to={`${otherPage}`}>
            /{pathname === 'design' ? ' Dev' : ' Design'}
        </Link>
      </StyledButton>
  );
}