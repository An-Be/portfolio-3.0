import React from "react";
import "./Feed.scss";
import {
  IMAGE,
  NAME,
  USER_NAME,
  PROFILE_STATS,
  SUMMARY,
  FEED_SECTIONS,
} from "../utils/feedContansts";

const Feed = () => {
  return (
    <div className="Feed">
      <div className="Feed__banner" />
      <div className="Feed__profileImage">
        <img src={IMAGE} />
      </div>
      <div className="Feed__profileInfo">
        <span id="name">{NAME}</span>
        <span id="userName">{USER_NAME}</span>
        <div id="stats">
          {Object.keys(PROFILE_STATS).map((stats, index) => (
            <div className="profile_stats" key={index}>
              <span className="statAmount">{PROFILE_STATS[stats]}</span>
              <span className="statName">{stats}</span>
            </div>
          ))}
        </div>
        <span id="summary">{SUMMARY}</span>
        <div className="Feed__sections">
          {FEED_SECTIONS.map((sections, index) => (
            <div key={index}>{sections}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
