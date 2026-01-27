import { CvButtonsWrap, CvToast, PageSubTitle, PageTitle } from "./styles";
import { useClipboard, usePage, useTheme, useThemeBreakpoints } from "shared/hooks";

import { CopyIcon, DownloadIcon } from "shared/icons";
import { Link } from "react-router-dom";
import { NavRootToggle } from "../NavRootToggle";
import React from 'react';
import { StyledButton } from "../NavRootToggle/styles";
import { ThemeToggle } from "../ThemeToggle";

const CV_MD_URL = '/Pascal_Weber_CV_Frontend_Engineer.md';

export const Navigation = () => {
  const { darkClass } = useTheme();
  const { isDesign, otherRoot } = usePage();
  const { isPhone, isMobile } = useThemeBreakpoints();
  const clip = useClipboard();
  const [showCopyToast, setShowCopyToast] = React.useState(false);
  const toastTimeoutRef = React.useRef(null);

  const handleCopyCV = React.useCallback(async () => {
    try {
      const res = await fetch(CV_MD_URL);
      const text = await res.text();
      clip.copy(text);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
      setShowCopyToast(true);
      toastTimeoutRef.current = setTimeout(() => {
        setShowCopyToast(false);
        toastTimeoutRef.current = null;
      }, 5000);
    } catch (_) {}
  }, [clip]);

  React.useEffect(() => () => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
  }, []);

  return (
    <>
      <PageTitle className={darkClass} isDesign={isDesign}>
        <Link to={otherRoot}>/{isDesign ? 'Design' : 'Dev'}</Link>
      </PageTitle>
      <ThemeToggle />

      <span>
        <CvButtonsWrap>
          {showCopyToast && <CvToast className={darkClass}>Copied{isMobile ? '' : ' to clipboard'}</CvToast>}
          <StyledButton
            type="button"
            className={`cv cv-copy ${darkClass}`}
            isPhone={isPhone}
            onClick={handleCopyCV}
          >
            <span>
              <span>CV.md</span>
              <CopyIcon fill="currentColor" />
            </span>
          </StyledButton>
          <StyledButton className={`cv ${darkClass}`} isPhone={isPhone}>
            <Link target='_blank' to='./Pascal_Weber_CV_Frontend_Engineer.pdf' download>
              <span>CV.pdf</span>
              <DownloadIcon width="18px" height="18px" alt='download' />
            </Link>
          </StyledButton>
        </CvButtonsWrap>
        <NavRootToggle />
      </span>
    </>
  )
}


export const NavigationMobile = () => {
  const { isDesign, pageTitle } = usePage();
  const { darkClass } = useTheme();
  const { isPhone, isMobile } = useThemeBreakpoints();
  const clip = useClipboard();
  const [showCopyToast, setShowCopyToast] = React.useState(false);
  const toastTimeoutRef = React.useRef(null);

  const handleCopyCV = React.useCallback(async () => {
    try {
      const res = await fetch(CV_MD_URL);
      const text = await res.text();
      clip.copy(text);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
      setShowCopyToast(true);
      toastTimeoutRef.current = setTimeout(() => {
        setShowCopyToast(false);
        toastTimeoutRef.current = null;
      }, 5000);
    } catch (_) {}
  }, [clip]);

  React.useEffect(() => () => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
  }, []);

  return (
    <>
      <span>
        <PageTitle className={darkClass} isDesign={isDesign} isPhone={isPhone}>
          <Link to={'/'}>
            { pageTitle }
          </Link>
        </PageTitle>

        <span>
          <CvButtonsWrap>
            {showCopyToast && <CvToast className={darkClass}>Copied{isMobile ? '' : ' to clipboard'}</CvToast>}
          <StyledButton
            type="button"
            className={`cv cv-copy ${darkClass}`}
            isPhone={isPhone}
            onClick={handleCopyCV}
          >
            <span>
              <span>CV</span>
              <CopyIcon fill="currentColor" />
            </span>
          </StyledButton>
            <StyledButton className={`cv ${darkClass}`} isPhone={isPhone}>
              <Link target='_blank' to='./Pascal_Weber_CV_Frontend_Engineer.pdf' download>
                <span>CV</span>
                <DownloadIcon width="18px" height="18px" alt='download' />
              </Link>
            </StyledButton>
          </CvButtonsWrap>
          <NavRootToggle />
        </span>
      </span>
      <PageSubTitle className={darkClass} isDesign={isDesign} isPhone={isPhone}>Portfolio</PageSubTitle>
    </>
  )
}
