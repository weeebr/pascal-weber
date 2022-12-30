import React from 'react';
import { Thumbnail, DesignWrapper } from './styles';
import { PageSubTitle } from "shared/theme";
import { designs } from 'shared/constants';
import { useMobileQuery } from "shared/hooks";
import {  useNavigate, Link } from "react-router-dom";
import { PageToggle } from "components/PageToggle";
import { StyledButton } from "components/PageToggle/styles";
import { PageTitle } from "shared/theme";
import { CV } from 'shared/files'
import { isDesignPage } from "shared/hooks";

export const Design = ({setOpenIndex}) => {
  const navigate = useNavigate();
  const isMobile = useMobileQuery();
  const isDesign = isDesignPage();

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