import React from 'react';
import { Thumbnail, DesignWrapper } from './styles';
import { PageSubTitle } from "shared/theme";
import { designs } from 'shared/constants';
import { useMediaQuery } from "shared/hooks";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { PageToggle } from "components/PageToggle/index";
import { StyledButton } from "components/PageToggle/styles";
import { PageTitle } from "shared/theme";
import { CV } from 'shared/files'

export const Design = ({openIndex, setOpenIndex}) => {
  const isMobile = useMediaQuery('(max-width: 880px)');
  const { pathname } = useLocation();
  const isDesign = pathname.includes('design');
  const navigate = useNavigate();

  const handleOpen = index => {
    setOpenIndex(index)
    navigate(`/design/${index}`);
  }

  return (
    <>
      <DesignWrapper>
        {isMobile && (
          <span>
            <PageTitle isDesign={isDesign}>
              /{isDesign ? 'Design' : 'Dev'}
            </PageTitle>

            <span>
              <StyledButton className='cv'>
                <Link target='_blank' to={CV} download>
                  CV
                </Link>
              </StyledButton>
              <PageToggle />
            </span>
          </span>
        )}
        <PageSubTitle isDesign={isDesign}>Portfolio</PageSubTitle>
        <div>
          {designs.map((image, index) => (
            <Thumbnail
              isMobile={isMobile}
              src={image.src} 
              key={image.src} 
              onClick={e => handleOpen(index)} 
              onKeyUp={e => handleOpen(index)}
            >
              <div className='img'/>
            </Thumbnail>
          ))}
        </div>
      </DesignWrapper>
    </>
  )
}