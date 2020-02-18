import React from "react";
import Card from "../components/Card";
import {useSpring, animated} from 'react-spring'


export default function Help() {
  const animProps = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <div>
      <section>
        <h1>Help</h1>
        <animated.div style={animProps}>I will fade in</animated.div>

        <div>
          <div><Card>Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus.</Card></div>
          <div> <Card /></div>
          <div> <Card /></div>
          <div> <Card /></div>
        </div>    
     
      </section>
    </div>    
  );
}