import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Networking Architect",
          "Web Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Entrepreneur"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
