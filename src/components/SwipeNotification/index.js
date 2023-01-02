import React from "react";
import { useSession } from "shared/hooks";
import { SwipeWrapper } from "./styles";
import { swipeIcon } from "shared/icons";

export const SwipeNotification = ({ avoidNotification }) => {
  const [show, setShow] = useSession('swipe-notification-shown', null);
  const [ userCanTouch ] = useSession('user-can-touch');

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
      <img src={swipeIcon} alt="swipe" />
      Hey good-looking! Swipe if you like what you see 💦🔥
    </SwipeWrapper>
  )
}