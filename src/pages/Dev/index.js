import React from 'react';
import { ProjectWrapper, ProjectsWrapper, LinkButton } from './styles';
import { projects } from '../../constants';
import { PageSubTitle } from "./../../shared/Theme/typography";
import { UrlIcon, EyeIcon } from "./../../constants";
import { DevModal } from "../../shared/DevModal";

export const Dev = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const ProjectCard = ({ title, description, year, url, index, setOpen, more, thumbnail, images }) => {
    return (
      <ProjectWrapper 
        src={thumbnail}
        onClick={() => { setOpenIndex(index) }}
      >
        <span>
          <p className='title'>{title}</p>
          <p className='year'>{year}</p>
        </span>
        <div className="img" alt="" />
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
        <PageSubTitle type="dev">Projects</PageSubTitle>
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
      <DevModal project={projects[openIndex]} setOpenIndex={setOpenIndex} />
    </>
  )
}