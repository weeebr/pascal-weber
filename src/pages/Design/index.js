import React from 'react';
import { Thumbnail, GalleryWrapper  } from './styles';
import ClickAwayListener from 'react-click-away-listener';
import { PageSubTitle } from "./../../shared/Theme/typography";

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

export const Design = () => {
  const [photoIndex, setPhotoIndex] = React.useState(0)
  const [isOpen, setOpen] = React.useState(false)
  
  const handleClick = (index) => {
    console.log(index)
    setOpen(true)
    setPhotoIndex(index)
  }

  return (
    <ClickAwayListener onClickAway={e => setOpen(false)}>
    
      <GalleryWrapper>
      <PageSubTitle type="design">Portfolio</PageSubTitle>
      <div>
        {images.map((image, index) => (
          <Thumbnail 
            src={image} 
            key={image} 
            onClick={e => handleClick(index)} 
            onKeyUp={e => handleClick(index)}
          />
        ))}
      </div>
    </GalleryWrapper>
  </ClickAwayListener>
  )
}