import React from 'react';
import { BackgroundWrapper } from "./styles.js";

export const Background = () => { 
  React.useEffect(() => {
    if(window) {
      var movementStrength = 25;
      var height = movementStrength / window.innerHeight;
      var width = movementStrength / window.innerWidth
      var topImage = document.getElementById('top-image');
  
      topImage.addEventListener('mousemove', function(e){
        var pageX = e.pageX - (window.innerWidth / 2);
        var pageY = e.pageY - (window.innerHeight / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        topImage.setAttribute("style", `background-position-x: ${newvalueX}px; background-position-y: ${newvalueY}px`);
      });
    }
  }, [])
  
  return (
    <BackgroundWrapper>
      <div id="top-image" />
    </BackgroundWrapper>
    
  )
}

