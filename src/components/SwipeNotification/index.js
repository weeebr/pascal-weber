import React from "react";
import { useSession } from "shared/hooks";
import { SwipeWrapper } from "./styles";
import { swipeIcon } from "shared/icons";

export const SwipeNotification = ({ avoidNotification }) => {
  const [modalOpened, setModalOpened] = useSession('modal-opened', null);
  const [ userCanTouch ] = useSession('user-can-touch');

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

  return modalOpened && userCanTouch && !avoidNotification && (
    <SwipeWrapper>
      <img src={swipeIcon} alt="swipe" />
      Hey good-looking! Swipe if you like what you see 💦🔥
    </SwipeWrapper>
  )
}