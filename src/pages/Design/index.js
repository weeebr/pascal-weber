import React from 'react';
import { Thumbnail, GalleryWrapper } from './styles';
import { PageSubTitle } from "./../../shared/Theme/typography";
import { designs } from '../../constants';
import { DesignModal } from "./../../shared/DesignModal/index";
import useMediaQuery from "./../../shared/useMediaQuery";

export const Design = ({ setOpenIndexDesign }) => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const isMobile = useMediaQuery('(max-width: 880px)');

  const handleClick = (index) => {
    console.log(index)
    setOpenIndex(index)
  }

  return (
    <>
      <GalleryWrapper>
      <PageSubTitle type="design">Portfolio</PageSubTitle>
      <div>
        {designs.map((image, index) => (
          <Thumbnail
            isMobile={isMobile}
            src={image.src} 
            key={image.src} 
            onClick={e => handleClick(index)} 
            onKeyUp={e => handleClick(index)}
          >
            <div className='img'/>
          </Thumbnail>
        ))}
      </div>
    </GalleryWrapper>
    <DesignModal design={designs[openIndex]} setOpenIndex={setOpenIndex} />
    </>
  )
}