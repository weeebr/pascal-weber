import { useSession, useTheme } from "shared/hooks";

import React from "react";
import {SwipeIcon} from "shared/icons";
import { SwipeWrapper } from "./styles";
import { theme } from 'shared/theme';

export const SwipeableNotification = ({ avoidNotification, text }) => {
  const [show, setShow] = useSession('swipe-notification-shown', null);
  const [ userCanTouch ] = useSession('user-can-touch');
  const { isDarkTheme } = useTheme();

  const message = text || 'Hey good-looking! Swipe if you like what you see 💦🔥';

  React.useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 8000);
    }

    if (show === null && !avoidNotification) {
      setTimeout(() => {
        setShow(true)
      }, 4000);
    }
  }, [show, setShow, avoidNotification])

  return userCanTouch && show && !avoidNotification && (
    <SwipeWrapper onClick={() => setShow(false)} onKeyUp={() => setShow(false)}>
      {isDarkTheme ? (
          <SwipeIcon fill={theme.colors.background.main} />
        ) : (
          <SwipeIcon fill={theme.colors.navigation.pageTitle} />
        )}
      {message}
    </SwipeWrapper>
  )
}
