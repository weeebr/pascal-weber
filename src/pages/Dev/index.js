import React from 'react';
import { ProjectCardWrapper, ProjectsWrapper, LinkButton } from './styles';
import { projects } from 'shared/constants';
import { PageSubTitle } from "shared/theme";
import { CV } from "shared/files";
import { UrlIcon, EyeIcon } from "shared/icons";
import { useMobileQuery, isDesignPage } from "shared/hooks";
import { Link, useNavigate  } from "react-router-dom";
import { theme, PageTitle } from "shared/theme";
import { StyledButton } from "components/PageToggle/styles";
import { PageToggle } from "components/PageToggle";

export const Dev = ({setOpenIndex}) => {
  const isMobile = useMobileQuery();
  const isDesign = isDesignPage();
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
      >
        <span>
          <p className='title'>{title}</p>
          <p className='year'>{year}</p>
        </span>
        {!isMobile && <div className="img" alt="" />}
        <LinkButton href={url}>
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
      <ProjectsWrapper>
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
        <PageSubTitle isDesign={isDesign}>Projects</PageSubTitle>
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