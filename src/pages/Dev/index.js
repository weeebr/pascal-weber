import React from 'react';
import { ProjectCardWrapper, ProjectsWrapper, LinkButton } from './styles';
import { projects } from '../../constants';
import { PageSubTitle } from "./../../shared/Theme/typography";
import { UrlIcon, EyeIcon } from "./../../constants";
import useMediaQuery from "./../../shared/useMediaQuery";
import { useLocation, Link, useNavigate  } from "react-router-dom";
import { PageTitle } from "../../shared/Theme/typography";
import { StyledButton } from "./../../shared/PageToggle/styles";
import { theme } from "./../../shared/Theme/typography";
import { PageToggle } from "./../../shared/PageToggle/index";
import CV from '../../assets/CV_Frontend_Engineer_Pascal_Weber.pdf'

export const Dev = ({setOpenIndex, openIndex}) => {
  const { pathname } = useLocation();
  const isDesign = pathname.includes('design');
  const isMobile = useMediaQuery('(max-width: 880px)');
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
              <UrlIcon fill={theme.colors.primary} />
            ) : (
              <EyeIcon fill={theme.colors.primary} />
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