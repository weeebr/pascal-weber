import github from 'assets/github.svg';
import email from 'assets/email.svg';
import linkedin from 'assets/linkedin.svg';
import swipe from 'assets/swipe.svg';
import { ReactComponent as download }  from 'assets/download.svg';
import { ReactComponent as sun } from 'assets/sun.svg';
import { ReactComponent as moon } from 'assets/moon.svg';

export const githubIcon = github
export const emailIcon = email
export const linkedinIcon = linkedin
export const swipeIcon = swipe
export const DownloadIcon = download
export const SunIcon = sun
export const MoonIcon = moon

export const UrlIcon = ({ fill }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill={fill} d="M5.99592 8.7325C5.81024 8.7325 5.62314 8.66109 5.48174 8.51969C4.14915 7.1871 4.14915 5.0204 5.48174 3.68925L8.16833 0.999796C8.81391 0.355642 9.67231 0 10.5836 0C11.4962 0 12.3532 0.355642 12.9988 1.00122C14.3314 2.33381 14.3314 4.50051 12.9988 5.83167L11.7705 7.05999C11.4862 7.34422 11.0249 7.34422 10.7407 7.05999C10.4564 6.77576 10.4564 6.31443 10.7407 6.0302L11.969 4.80188C12.7331 4.03775 12.7331 2.79372 11.969 2.02959C11.5991 1.65966 11.1063 1.45542 10.5836 1.45542C10.0594 1.45542 9.56805 1.65966 9.19812 2.02959L6.5101 4.71761C5.74597 5.48174 5.74597 6.72577 6.5101 7.4899C6.79433 7.77413 6.79433 8.23546 6.5101 8.51969C6.36727 8.66109 6.1816 8.7325 5.99592 8.7325Z" />
    <path fill={fill} d="M3.41645 14C2.50377 14 1.64681 13.6444 1.00122 12.9988C-0.331361 11.6662 -0.331361 9.49949 1.00122 8.16833L2.22954 6.94001C2.51377 6.65578 2.97511 6.65578 3.25933 6.94001C3.54356 7.22424 3.54356 7.68558 3.25933 7.9698L2.03101 9.19812C1.26688 9.96225 1.26688 11.2063 2.03101 11.9704C2.40094 12.3403 2.8937 12.5446 3.41645 12.5446C3.9392 12.5446 4.43195 12.3403 4.80188 11.9704L7.4899 9.28239C8.25403 8.51826 8.25403 7.27423 7.4899 6.5101C7.20567 6.22587 7.20567 5.76454 7.4899 5.48031C7.77413 5.19608 8.23546 5.19608 8.51969 5.48031C9.85227 6.8129 9.85227 8.9796 8.51969 10.3108L5.83167 13.0002C5.18608 13.6444 4.32769 14 3.41645 14Z" />
  </svg>
)

export const EyeIcon = ({ fill }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000">
  <g>
    <g>
      <path fill={fill} d="M981.2,472.1c-4.1-5.8-101-144.3-234.9-238.9C677,184,589.5,157,500,157c-89.4,0-176.9,27-246.5,76.2c-133.8,94.6-230.7,233-234.8,238.9c-11.7,16.8-11.7,39.1,0,55.9c4.1,5.8,100.9,144.3,234.8,238.9C323,816,410.6,843,500,843c89.5,0,177-27,246.4-76.2c133.8-94.6,230.8-233,234.9-238.9C992.9,511.2,992.9,488.8,981.2,472.1z M500,671.5c-94.8,0-171.5-76.9-171.5-171.5c0-94.8,76.7-171.5,171.5-171.5c94.6,0,171.5,76.7,171.5,171.5C671.5,594.6,594.6,671.5,500,671.5z"/>
      <path fill={fill} d="M598,500c0,54-44,98-98,98c-54.1,0-98-44-98-98c0-54.1,43.9-98,98-98C554,402,598,445.9,598,500z"/>
    </g>
  </g>
  </svg>
)

export const PrevIcon = ({ fill }) => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.9 7.856H6.048L3.456 4.868H9.108V3.452H3.456L6.048 0.464H3.9L0.612 4.16L3.9 7.856Z" fill={fill} />
  </svg>
)

export const NextIcon = ({ fill }) => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.66 7.856H5.82L9.108 4.16L5.82 0.464H3.66L6.264 3.452H0.612V4.868H6.264L3.66 7.856Z" fill={fill} />
  </svg>
)

export const CloseIcon = ({ fill }) => (
  <svg width="24" cursor="pointer" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.0001 2L2.00006 22M21.5671 22L1.56714 2" stroke={fill} strokeWidth="3"/>
  </svg>
)