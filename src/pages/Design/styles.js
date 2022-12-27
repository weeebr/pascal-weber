import styled from 'styled-components';

export const GalleryWrapper = styled.div`
 & > div {
    display: flex;
  }
`
export const FullImage = styled.div``


export const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0 0 14px 4px #ad5f7399;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  border-radius: 3px;
  transition: all 1s ease;

  &:not(:first-child) {
    margin-left: 20px;
  }

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 5px 2px #51266d;
    transition: all 0s ease;
  }
`


