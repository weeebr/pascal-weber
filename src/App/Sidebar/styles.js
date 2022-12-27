import styled from 'styled-components';

export const Summary = styled.div`
  background: #F9F9F9;
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