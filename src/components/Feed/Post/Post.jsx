import React from "react";
import Outline from "../Outline/Outline";
import './Post.scss';
import { feedProptypes } from "../../utils/feedConstants";

const Post = ({ photo, name, username, timestamp, displayItems }) => {
  return (
    <div className="Post">
          <Outline
            photo={photo}
            name={name}
            username={username}
            timestamp={timestamp}
            displayItems={displayItems}
          />
    </div>
  );
};
Post.propTypes = feedProptypes;

export default Post;
