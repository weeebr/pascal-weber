import React from "react";
import { More } from "./More";
import { Summary, PortraitFoto } from "./styles";
import pascalFoto from '../../assets/pascal-weber.png'
import githubIcon from '../../assets/github.svg'
import emailIcon from '../../assets/email.svg'
import linkedInIcon from '../../assets/linkedin.svg'

export const Sidebar = () => {
  const [page, setPage] = React.useState('dev');
  const [devIndex, setDevIndex] = React.useState(0)
  const [designIndex, setDesignIndex] = React.useState(0)
  const [isOpen, setOpen] = React.useState(false)
  const isDesignPage = page === 'design';

  return (
    <Summary>
      <div className="summary">
        <PortraitFoto src={pascalFoto}><img className="img" alt="" /></PortraitFoto>
        <h1>Pascal Weber</h1>
        <div className="job-title">Experienced Frontend Engineer</div>
        <div className="contact-info">
          <img src={linkedInIcon} alt="LinkedIn" width="20px" height={20} />
          <img src={githubIcon} alt="Github" width="20px" height={20} />
          <img src={emailIcon} alt="E-Mail" width="20px" height={20} data-copy="contact@pascal-weber.ch" />
        </div>
      </div>
      <More />
    </Summary>
  );
}

