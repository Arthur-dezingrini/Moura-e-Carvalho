import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ children, animationType, animationType2, ...rest }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const getTransform = () => {
    switch (animationType) {
      case 'slideTop':
        return inView ? 'translateY(0%)' : 'translateY(-100%)';
      case 'scale':
        return inView ? 'scale(1)' : 'scale(0.3)';
      case 'slideBottom':
        return inView ? 'translateY(0%)' : 'translateY(100%)';
      case 'slideRigth':
        return inView ? 'translateX(0%)' : 'translateX(100%)'
      default:
        return inView ? 'translateX(0%)' : 'translateX(-100%)';
    }
  };

  const props = useSpring({ 
    transform: getTransform(),
    from: { transform: animationType2 },
    config: { duration: 700 },
    config: { tension: 50, friction: 26 }
  });

  return (
    <animated.div ref={ref} style={{ ...props, width: 'fit-content' }} {...rest}>
      {children}
    </animated.div>
  );
};

export default AnimatedComponent;
