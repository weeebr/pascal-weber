import React from 'react';
import { Thumbnail, GalleryWrapper  } from './styles';
import ClickAwayListener from 'react-click-away-listener';
import { PageSubTitle } from "./../../shared/Theme/typography";
import { designs } from '../../constants';

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
        {designs.map((image, index) => (
          <Thumbnail 
            src={image} 
            key={image} 
            onClick={e => handleClick(index)} 
            onKeyUp={e => handleClick(index)}
          >
            <div className='img'/>
          </Thumbnail>
        ))}
      </div>
    </GalleryWrapper>
  </ClickAwayListener>
  )
}