import React from 'react';
import styled from 'styled-components';

export const Summary = styled.div`
  background: #F9F9F9;
  box-shadow: 0 0 20px 0 white;
  max-width: 270px;
  position: relative;
  display: flex;
  border-right: 1px solid #C3C3C3;
  flex-direction: column;
  justify-content: center;
  text-align: right;

  .summary {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;

    .contact-info {
      display: flex;
      gap: 12px;
      jusitfy-content: center;
      align-items: center;
    }

    h1 {
      white-space: nowrap;
      margin: 0;
      font-weight: 700;
      font-size: 24px;
      line-height: 27px;
      color: #565555;
      padding: 8px 8px 2px 10px;
    }

    .job-title {
      color: #565555;
      text-transform: uppercase;
      font-weight: 500;
      text-transform: uppercase;
      margin: 12px 0;
    }
  }
}`

export const PortraitFoto = styled.div`
  width: 145px;
  height: 145px;
  overflow: hidden;
  border-radius: 50%;
  background: url(${props => props.src}) no-repeat center center;
`