import styled from 'styled-components';

export const Summary = styled.div`
  background: #F9F9F9;
  max-width: ${props => props.isMobile ? "100%" : "270px"};
  position: relative;
  display: flex;
  border-right: ${props => props.isMobile ? null : "1px solid #C3C3C3;"};
  flex-direction: column;
  justify-content: center;
  text-align: ${props => props.isMobile ? "center" : "right"};

  .summary {
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isMobile ? "center" : "flex-end"};
    padding: 20px;

    .contact-info {
      display: flex;
      gap: 12px;
      jusitfy-content: center;
      align-items: center;
    }

    .job-title {
      color: black;
      font-weight: 500;
      margin: 12px 0;
      font-size: 22px;
      line-height: 20px;
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