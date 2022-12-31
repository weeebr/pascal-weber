import React from 'react';
import { Thumbnail, DesignWrapper } from './styles';
import { PageSubTitle } from "shared/theme";
import { designs } from 'shared/constants';
import { useThemeBreakpoints } from "shared/hooks";
import {  useNavigate, Link } from "react-router-dom";
import { PageToggle } from "components/PageToggle";
import { StyledButton } from "components/PageToggle/styles";
import { PageTitle } from "shared/theme";
import { CV } from 'shared/files'
import { usePage } from "shared/hooks";

export const Design = ({darkClass, setOpenIndex}) => {
  const navigate = useNavigate();
  const { isMobile } = useThemeBreakpoints();
  const { isDesign } = usePage();

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
              className={darkClass}
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