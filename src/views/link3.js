import React from "react";
import {useSpring, animated} from 'react-spring'

export default function Link3() {
  const animProps = useSpring({opacity: 1, from: {opacity: 0}})
  return (

    <animated.div style={animProps}>
    <div>
            
      <section className="content">      
        <h1>Content 3</h1>

      </section>


      <section>
     
      </section>
    </div>     
    </animated.div>
  );
}