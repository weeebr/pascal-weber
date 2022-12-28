import React from 'react';
import { ProjectWrapper, ProjectsWrapper, LinkButton } from './styles';
import { projects } from '../../constants';
import { PageSubTitle } from "./../../shared/Theme/typography";
import { UrlIcon, EyeIcon } from "./../../constants";
import { DevModal } from "../../shared/DevModal";
import useMediaQuery from "./../../shared/useMediaQuery";
import { useLocation, Link } from "react-router-dom";
import { PageTitle } from "../../shared/Theme/typography";
import { StyledButton } from "./../../shared/PageToggle/styles";
import { PageToggle } from "./../../shared/PageToggle/index";
import CV from '../../assets/CV_Frontend_Engineer_Pascal_Weber.pdf'

export const Dev = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width: 880px)');

  const ProjectCard = ({ title, description, year, url, index, setOpen, more, thumbnail, images }) => {
    return (
      <ProjectWrapper 
        isMobile={isMobile}
        src={thumbnail}
        onClick={() => { setOpenIndex(index) }}
      >
        <span>
          <p className='title'>{title}</p>
          <p className='year'>{year}</p>
        </span>
        {!isMobile && <div className="img" alt="" />}
        <LinkButton href={url}>
          <span className='link'>
            {more ? (
              <UrlIcon fill="#0e3e6a" />
            ) : (
              <EyeIcon fill="#0e3e6a" />
            )}
            {more ? 'More' : 'Demo'}
          </span>
        </LinkButton>
      </ProjectWrapper>
    )
  }

  return (
    <>
      <ProjectsWrapper>
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
          <PageSubTitle type="dev">Projects</PageSubTitle>
        <div>
          {openIndex === null && projects.map((project, index) => (
            <ProjectCard  
              key={project.title} 
              index={index} 
              {...project} 
            />
          ))}
        </div>
      </ProjectsWrapper>
      <DevModal openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </>
  )
}