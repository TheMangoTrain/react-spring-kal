import React from "react";
import Card from "../components/Card";
import {useSpring, animated} from 'react-spring'


export default function Start() {
  const animProps = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <div className="start">
      <section>
        <animated.div style={animProps}>

        <div className="cards">
          <Card>Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus.</Card>
          <Card>Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus.</Card>
          <Card>Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus.</Card>
          <Card>Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus.</Card>
        </div>

        </animated.div>
     
      </section>
    </div>    
  );
}