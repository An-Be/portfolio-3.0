import React from "react";
import { randomColor } from "../../utils/randomColor.util";
import "./Outline.scss";

const Outline = ({ photo, name, username, displayItems }) => {
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
              <span className="Outline__wrapper__timeStamp">
                {item.timeStamp}
              </span>
              <div className="displayItems">
              <span className="Outline__wrapper__tag" style={{backgroundColor: randomColor()}}>{item.tag}</span>
                <span className="Outline__wrapper__header">
                  <strong>{item.header}</strong>
                </span>
                <span className="Outline__wrapper__item">{item.text}</span>
                {item.img && (
                  <img className="Outline__wrapper__project_image" src={item.img} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Outline;
