import React from 'react';
import { Thumbnail, GalleryWrapper } from './styles';
import { PageSubTitle } from "./../../shared/Theme/typography";
import { designs } from '../../constants';
import { DesignModal } from "./../../shared/DesignModal/index";
import useMediaQuery from "./../../shared/useMediaQuery";
import { useLocation, Link } from "react-router-dom";
import { PageToggle } from "./../../shared/PageToggle/index";
import { StyledButton } from "./../../shared/PageToggle/styles";
import { PageTitle } from "../../shared/Theme/typography";
import CV from '../../assets/CV_Frontend_Engineer_Pascal_Weber.pdf'

export const Design = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const isMobile = useMediaQuery('(max-width: 880px)');
  const { pathname } = useLocation();

  const handleClick = (index) => {
    console.log(index)
    setOpenIndex(index)
  }

  return (
    <>
      <GalleryWrapper>
      <span>
          {isMobile && (
            <>
              <PageTitle type={pathname}>
                /{pathname === '/design' ? 'Design' : 'Dev'}
              </PageTitle>

              <span>
                <StyledButton className='cv'>
                  <Link target='_blank' to={CV} download>
                    CV
                  </Link>
                </StyledButton>
                <PageToggle />
              </span>
            </>
          )}
        </span>
          <PageSubTitle type="design">Portfolio</PageSubTitle>
      <div>
        {openIndex === null && designs.map((image, index) => (
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
    <DesignModal openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </>
  )
}