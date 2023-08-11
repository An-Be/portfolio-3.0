import React from "react";
import Outline from "../Outline/Outline";
import './Post.scss';
import { feedProptypes, POST_DISPLAY_ITEMS } from "../../utils/feedConstants";

const Post = ({ photo, name, username, timestamp }) => {
  return (
    <div className="Post">
          <Outline
            photo={photo}
            name={name}
            username={username}
            timestamp={timestamp}
            displayItems={POST_DISPLAY_ITEMS}
          />
    </div>
  );
};
Post.propTypes = feedProptypes;

export default Post;
