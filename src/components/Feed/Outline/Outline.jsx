import React from "react";
import { randomColor } from "../../utils/randomColor.util";
import {
  AiOutlineHeart,
  AiOutlineRetweet,
  AiOutlineComment,
  AiFillGithub,
} from "react-icons/ai";
import { GoRocket } from "react-icons/go";
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
              <span className="Outline__wrapper__inner__name">{name}</span>
              <span className="Outline__wrapper__inner__userName">{username}</span>
              <span className="Outline__wrapper__inner__timeStamp">
                {item.timeStamp}
              </span>
              <div className="displayItems">
                <span className="Outline__wrapper__header">
                  <strong style={{ color: randomColor() }}>{item.header}</strong>
                </span>
                <span className="Outline__wrapper__item">{item.text}</span>
                {item.img && (
                  <img
                    className="Outline__wrapper__project_image"
                    src={item.img}
                  />
                )}
              </div>
              <div className="displayItems__icons">
                {item.github["isPresent"] && (
                  <>
                    <a target="_blank" href={item.github["data"]}>
                      <AiFillGithub />
                      <span className="displayItems__icons__text github">
                      Repository
                    </span>
                    </a>

                  </>
                )}
                {item.deployed["isPresent"] && (
                  <>
                    <a target="_blank" href={item.deployed["data"]}>
                      <GoRocket />
                      <span className="displayItems__icons__text deployed">
                      Deployed Site
                    </span>
                    </a>

                  </>
                )}
                {item.like["isPresent"] && (
                  <>
                    <AiOutlineHeart />{" "}
                    <span className="displayItems__icons__text">
                      {item.like["data"]}
                    </span>
                  </>
                )}
                {item.reshare["isPresent"] && (
                  <>
                    <AiOutlineRetweet />
                    <span className="displayItems__icons__text">
                      {item.reshare["data"]}
                    </span>
                  </>
                )}
                {item.comment["isPresent"] && (
                  <>
                    <AiOutlineComment />
                    <span className="displayItems__icons__text">
                      {item.comment["data"]}
                    </span>
                  </>
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
