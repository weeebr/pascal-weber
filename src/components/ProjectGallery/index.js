import React from 'react';
import { ProjectCardWrapper, ProjectsWrapper, LinkButton, Thumbnail } from './styles';
import { UrlIcon, EyeIcon } from "shared/icons";
import { useTheme, useProjectData, usePage, useThemeBreakpoints } from "shared/hooks";
import { useNavigate } from "react-router-dom";
import { theme } from "shared/theme";
import { NavigationMobile } from "components/Navigation";

export const ProjectGallery = () => {
  const navigate = useNavigate();
  const { isDesign, isDev, rootUrl } = usePage();
  const { data, setOpenIndex } = useProjectData();
  const { darkClass, isDarkTheme } = useTheme();
  const { isMobile } = useThemeBreakpoints();

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
        {!isMobile && <div className="img" alt="" />}
        <LinkButton className={darkClass} href={url}>
          <span className='link'>
            {more ? (
              <UrlIcon fill={theme.colors.primary.main} />
            ) : (
              <EyeIcon fill={theme.colors.primary.main} />
            )}
            {more ? 'More' : 'Demo'}
          </span>
        </LinkButton>
      </ProjectCardWrapper>
    )
  }

  return (
    <ProjectsWrapper isMobile={isMobile}>
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
            <div className='img'/>
          </Thumbnail>
        ))}
      </div>
    </ProjectsWrapper>
  )
}