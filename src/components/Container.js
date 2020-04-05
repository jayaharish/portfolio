import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import "./Container.css";

function Container(props) {
  const myProps = useSpring({
    from: {
      num: 30
    },
    num: 0
  });
  return (
    <animated.div
      style={{
        transform: myProps.num.interpolate(
          angle =>
            `perspective(400px) translate(-50%,-50%) rotateY(${angle}deg)`
        )
      }}
      className="container"
    ></animated.div>
  );
}

export default Container;
