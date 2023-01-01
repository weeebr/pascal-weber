import React from 'react';
import { ProjectCardWrapper, ProjectsWrapper, LinkButton } from './styles';
import { projects } from 'shared/constants';
import { PageSubTitle } from "shared/theme";
import { CV } from "shared/files";
import { UrlIcon, EyeIcon, DownloadIcon } from "shared/icons";
import { useThemeBreakpoints, usePage } from "shared/hooks";
import { Link, useNavigate  } from "react-router-dom";
import { theme, PageTitle } from "shared/theme";
import { StyledButton } from "components/PageToggle/styles";
import { PageToggle } from "components/PageToggle";

export const Dev = ({darkClass,  setOpenIndex}) => {
  const { isMobile } = useThemeBreakpoints();
  const { isDesign }  = usePage();
  const navigate = useNavigate();

  const handleOpen = index => {
    setOpenIndex(index)
    navigate(`/dev/${index}`);
  }

  const ProjectCard = ({ title, description, year, url, index, setOpen, more, thumbnail, images }) => {
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
    <>
      <ProjectsWrapper isMobile={isMobile}>
        {isMobile && (
          <span>
            <PageTitle className={darkClass} isDesign={isDesign}>
              <Link to={'/'}>
                /Dev
              </Link>
            </PageTitle>

            <span>
              <StyledButton className={`cv ${darkClass}`}>
                <Link target='_blank' to={CV} download>
                  <span>CV</span>
                  <DownloadIcon width="18px" height="18px" alt='download' />
                </Link>
              </StyledButton>
              <PageToggle />
            </span>
          </span>
        )}
        <PageSubTitle className={darkClass} isMobile={isMobile} isDesign={isDesign}>Projects</PageSubTitle>
        <div>
          {projects.map((project, index) => (
            <ProjectCard  
              key={project.title} 
              index={index} 
              {...project} 
            />
          ))}
        </div>
      </ProjectsWrapper>
    </>
  )
}