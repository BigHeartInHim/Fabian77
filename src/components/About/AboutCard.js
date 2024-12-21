import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
Hi Everyone, I am <span className="purple">Fabian Kaoka </span>
from <span className="purple">Nyeri, Kenya.</span>
<br />
I am currently employed as a Networking Architect and a Web Developer.
            <br />
            I have completed my Bachelors Degree in Computer Science at Dedan Kimathi University
          .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Change begins with you!"{" "}
          </p>
          <footer className="blockquote-footer">Fabian Kaoka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
