import { EyeIcon, UrlIcon } from "shared/icons";
import { LinkButton, ProjectCardWrapper, ProjectsWrapper, Thumbnail } from './styles';
import { usePage, useProjectData, useTheme, useThemeBreakpoints } from "shared/hooks";

import { NavigationMobile } from "components/Navigation";
import React from 'react';
import { theme } from "shared/theme";
import { useNavigate } from "react-router-dom";

export const ProjectGallery = () => {
  const navigate = useNavigate();
  const { isDesign, isDev, rootUrl } = usePage();
  const { data, setOpenIndex } = useProjectData();
  const { darkClass, isDarkTheme } = useTheme();
  const { isMobile, isPhone } = useThemeBreakpoints();

  const handleOpen = index => {
    setOpenIndex(index)
    navigate(`/${rootUrl}${index}`);
  }

  const ProjectCard = ({ title, year, url, index, more, thumbnail }) => {

    return (
      <ProjectCardWrapper 
        isMobile={isMobile}
        src={thumbnail}
        onClick={() => handleOpen(index)}
        className={darkClass}
      >
        <span>
          <p className='title'>{title}</p>
          <p className='year'>{year}</p>
        </span>
        {!isMobile && <div className="image" alt="" />}
        <LinkButton className={darkClass} href={url}>
          <span className='link'>
            {more ? (
              <UrlIcon fill={theme.colors.background.main} />
            ) : (
              <EyeIcon fill={theme.colors.background.main} />
            )}
            {more ? 'More' : 'Demo'}
          </span>
        </LinkButton>
      </ProjectCardWrapper>
    )
  }

  return (
    <ProjectsWrapper darkClass={darkClass} isMobile={isMobile} isPhone={isPhone}>
      {isMobile && (
        <NavigationMobile darkClass={darkClass} isDarkTheme={isDarkTheme} />
      )}
      <div>
        {isDev && data.map((d, index) => (
          <ProjectCard  
            key={d.title} 
            index={index}
            {...d} 
          />
        ))}
        {isDesign && data.map((d, index) => (
          <Thumbnail
            isMobile={isMobile}
            src={d.src} 
            key={d.src} 
            className={darkClass}
            onClick={e => handleOpen(index)} 
            onKeyUp={e => handleOpen(index)}
          >
            <div className='image'/>
          </Thumbnail>
        ))}
      </div>
    </ProjectsWrapper>
  )
}
