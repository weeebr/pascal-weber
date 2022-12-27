import React from 'react';
import { ProjectWrapper, ProjectsWrapper, FullProject } from './styles';
import urlIcon from '../../assets/url.svg';
import ClickAwayListener from "react-click-away-listener";
import { CSSTransition } from "react-transition-group";
import { projects } from '../../constants';
import { PageSubTitle } from "./../../shared/Theme/typography";

export const Dev = () => {
    const [openIndex, setOpenIndex] = React.useState(null); 
    const [isOpen, setOpen] = React.useState(false); 

   const ProjectCard = ({ title, description, year, url, img, index, setOpen, more }) => {
    const isOpen = openIndex === index;
    return (
      <ProjectWrapper isOpen={isOpen} onClick={() => { setOpen(true); setOpenIndex(index) }}>
        <span>
          <p className='title'>{title}</p>
          <p className='year'>{year}</p>
        </span>
        <img src={img} alt="" />
        <a href={url}>{<img src={urlIcon} alt="" />}{more ? 'More' : 'Demo'}</a>
      </ProjectWrapper>
    )
  }

  return (
  <ClickAwayListener  onClickAway={e => setOpen(false)}>
    <ProjectsWrapper>
      <PageSubTitle type="dev">Projects</PageSubTitle>
      <div>
        {projects.map((project, index) => (
          <ProjectCard setOpen={setOpen} key={project.title} index={index} {...project} />
        ))}
      </div>
      
      <CSSTransition
            in={isOpen}
            timeout={400}
            classNames="fade"
          >
          <FullProject isOpen={isOpen} {...projects[openIndex]} />
        </CSSTransition>
    </ProjectsWrapper>
  </ClickAwayListener>
  )
}