import React from "react";
import { breakpoints } from "./theme";
import { useLocation } from "react-router-dom";

export const useTouchListener = () => {
  const [, setUserCanTouch] = useSession('user-can-touch', false);

  React.useEffect(() => {
    window.addEventListener('touchstart', function onFirstTouch() {
      setUserCanTouch(true);
      window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);
  }, [setUserCanTouch])
}

export const useThemeBreakpoints = () => {
  const { mobile, tablet } = breakpoints;
  const isMobile = useMediaQuery(`(max-width: ${mobile}px)`);
  const isTablet = useMediaQuery(`(max-width: ${tablet}px)`);

  return { isMobile, isTablet };
}

export const usePage = () => {
  const { pathname } = useLocation();
  const isDesign = pathname.includes('design');
  const isDev = pathname.includes('dev');
  
  return { isDesign, isDev };
}

export const useClipboard = () => {
  const copy = text => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      const result = document.execCommand('copy');
      document.body.removeChild(input);
      return result;
    }
  }
  return { copy }
}

export const useSession = (key, defaultValue = null) => {
  const item = sessionStorage.getItem(key);
  const initialValue = item ? JSON.parse(item) : defaultValue;
  const [value, setValue] = React.useState(initialValue);

  const updateValue = (newValue) => {
    setValue(newValue);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, updateValue];
}

export const useMediaQuery = query => {
  const getMatches = query => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = React.useState(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}