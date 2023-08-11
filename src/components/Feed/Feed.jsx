import React, { useState, Suspense } from "react";
import "./Feed.scss";
import PostsOutline from "./PostsOutline/PostsOutline";
import {
  IMAGE,
  NAME,
  USER_NAME,
  PROFILE_STATS,
  SUMMARY,
  FEED_SECTIONS,
} from "../utils/feedConstants";

const Feed = () => {
  const [feedToShow, setFeedToShow] = useState("Posts");
  console.log(feedToShow)
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
          {FEED_SECTIONS.map((section, index) => (
            <div
              key={index}
              id={section}
              onClick={() => setFeedToShow(section)}
            >
              <div>{section}</div>
            </div>
          ))}
        </div>
          <PostsOutline
            theme={feedToShow}
            photo={IMAGE}
            name={NAME}
            username={USER_NAME}
            timestamp={"1hr"}
          />
      </div>
    </div>
  );
};

export default Feed;
