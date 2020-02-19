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
          <Card title="Link 1" link="/link1">Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus.</Card>
          <Card title="Link 2" link="/link2">Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus.</Card>
          <Card title="Link 3" link="/link3">Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus.</Card>
          <Card title="Link 4" link="/link4">Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus.</Card>
        </div>

        </animated.div>
     
      </section>
    </div>    
  );
}