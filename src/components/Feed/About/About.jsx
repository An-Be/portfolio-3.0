import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <div className="About__heading"><span className="About__heading__title">👋 Hi, I'm <strong className="About__heading__name">Andrea</strong></span></div>
      <p className="About__description">
        I am a software Engineer III at American Express. I have a passion for
        building accessible websites and am interested in game development. On
        my free time I love trying new restaurants, playing video games, and
        finding new shows to watch. I also enjoy painting, recently started to
        crochet, and am interested in getting back into ceramics. I also have 2 cats, Haru and Moose. I prefer to use the following technologies, Javascript, React.js/Redux, Node.js, SASS, Python.
      </p>
      <img className="About__img" src='/about.jpg' />
    </div>
  );
};

export default About;
