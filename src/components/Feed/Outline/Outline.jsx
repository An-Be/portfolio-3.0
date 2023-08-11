import React from "react";
import "./Outline.scss";

const Outline = ({ photo, name, username, timestamp, displayItems }) => {
  return (
    <>
      {displayItems.map((item) => (
        <div className="Outline">
          <div className="Outline__wrapper">
            <div className="Outline__wrapper__image">
            <img src={photo} />
            </div>
            <div className="Outline__wrapper__inner">
              <span className="Outline__wrapper__name">{name}</span>
              <span className="Outline__wrapper__userName">{username}</span>
              <span className="Outline__wrapper__timeStamp">{timestamp}</span>
              <div className="displayItems">
              <span className="Outline__wrapper__item">{item}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Outline;
