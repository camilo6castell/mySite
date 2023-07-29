const keyframes = () => `
@keyframes slideTop {
  0% {
  opacity: 0;
  transform: translateY(100px);
  }
  100% {
  opacity: 1;
  transform: translateY(0);
  }
}

@keyframes slideRight {
  0% {
  opacity: 0;
  transform: translateX(-100px);
  }
  100% {
  opacity: 1;
  transform: translateX(0);
  }
}

@keyframes slideLeft {
  0% {
  opacity: 0;
  transform: translateX(100px);
  }
  100% {
  opacity: 1;
  transform: translateX(0);
  }
}

@keyframes slideBottom {
  0% {
  opacity: 0;
  transform: translateY(-100px);
  }
  100% {
  opacity: 1;
  transform: translateY(0);
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes floatImage {
    0% { transform: translate(0,  0vh); }
    50%  { transform: translate(0, 1vh); }
    100%   { transform: translate(0, 0vh); } 
  }

@keyframes circleRotate {
  0% {
  transform: rotate(0);
  }
  100% {
  transform: rotate(360deg);
  }
}

@keyframes appear {
  0%{
  
    opacity: 0;
    
  }
  20%{
  
      opacity: 0.2;
      
    }
  35%{
  
      opacity: 0.3;
      
    }
  50%{
    opacity: 0.5;
    
  }
  100%{
    
    opacity: 1;
    
  }
}


@keyframes lights {
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
  30% { 
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  40% { 
    color: hsl(230, 100%, 95%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }
  
  70% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  100% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
}
`
export default keyframes;