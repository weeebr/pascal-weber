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
      }, 8000);
    }

    if (modalOpened === null && !avoidNotification) {
      setTimeout(() => {
        setModalOpened(true)
      }, 4000);
    }
  }, [modalOpened, setModalOpened, avoidNotification])

  return modalOpened && userCanTouch && !avoidNotification && (
    <SwipeWrapper onClick={() => setModalOpened(true)} onKeyUp={() => setModalOpened(true)}>
      <img src={swipeIcon} alt="swipe" />
      Hey good-looking! Swipe if you like what you see 💦🔥
    </SwipeWrapper>
  )
}