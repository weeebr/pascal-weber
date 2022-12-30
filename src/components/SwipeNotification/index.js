import React from "react";
import { useSession } from "shared/hooks";
import { SwipeWrapper } from "./styles";
import { swipeIcon } from "shared/icons";

export const SwipeNotification = ({ avoidNotification }) => {
  const [ isTouch, setTouch ] = React.useState(null);
  const [modalOpened, setModalOpened] = useSession('modal-opened', null);

  React.useEffect(() => {
    const isTouchDevice = async () => {
      return ('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0)
    }
    isTouchDevice().then(is => { setTouch(is) })
  }, [])

  React.useEffect(() => {
    if (modalOpened) {
      setTimeout(() => {
        setModalOpened(false);
      }, 4000);
    }

    if (modalOpened === null && !avoidNotification) {
      setTimeout(() => {
        setModalOpened(true)
      }, 5000);
    }
  }, [modalOpened, setModalOpened, avoidNotification])

  return modalOpened && isTouch && !avoidNotification && (
    <SwipeWrapper>
      <img src={swipeIcon} alt="swipe" />
      Hey good-looking! Swipe if you like what you see 💦🔥
    </SwipeWrapper>
  )
}