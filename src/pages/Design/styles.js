import styled from 'styled-components';

export const GalleryWrapper = styled.div`
 & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`
export const FullImage = styled.div``


export const Thumbnail = styled.div`
  width: ${props => props.isMobile ? "100%" : '217px'};
  height: 150px;
  border: 2px solid #bf9000;
  transition: all 1s ease;
  cursor: pointer;
  background: white;
  padding: 4px;

  div.img {
    width: 100%;
    height: 100%;
    background: url(${props => props.src}) no-repeat center center;
    background-size: cover;
    transition: all 4s ease;

  }

  &:hover {
    transform: scale(1.08);
    transition: all 0s ease;
    background: #bf9000;

    div.img {
      filter: sepia(1);
      transition: all 0s ease;
    }
  }
`


