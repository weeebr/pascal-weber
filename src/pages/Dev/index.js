import React from 'react';
import { ProjectWrapper, ProjectsWrapper, LinkButton } from './styles';
import ClickAwayListener from "react-click-away-listener";
import { CSSTransition } from "react-transition-group";
import { projects } from '../../constants';
import { PageSubTitle } from "./../../shared/Theme/typography";
import { UrlIcon, EyeIcon } from "./../../constants";

export const Dev = () => {
    const [openIndex, setOpenIndex] = React.useState(null); 
    const [hoverIndex, setHoverIndex] = React.useState(null); 
    const [isOpen, setOpen] = React.useState(false); 

   const ProjectCard = ({ hoverIndex, title, description, year, url, index, setOpen, more, images }) => {
    const isOpen = openIndex === index;
    const iconColor = hoverIndex === index ? "white" : "#0e3e6a";

    return (
      <ProjectWrapper 
        src={hoverIndex === index ? images[1] : images[0]}
        isOpen={isOpen} 
        onClick={() => { setOpen(true); setOpenIndex(index) }}
        
      >
        <span>
          <p className='title'>{title}</p>
          <p className='year'>{year}</p>
        </span>
        <div className="img" alt="" />
        <LinkButton href={url}>
          <span className='link'>
            {more ? (
              <UrlIcon fill={iconColor} />
            ) : (
              <EyeIcon fill={iconColor} />
            )}
            {more ? 'More' : 'Demo'}
          </span>
        </LinkButton>
      </ProjectWrapper>
    )
  }

  return (
    <ProjectsWrapper>
      <PageSubTitle type="dev">Projects</PageSubTitle>
      <div>
        {projects.map((project, index) => (
          <ProjectCard  
            setOpen={setOpen} 
            key={project.title} 
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </ProjectsWrapper>
  )
}