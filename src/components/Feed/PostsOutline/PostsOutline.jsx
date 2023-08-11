import React, { Suspense } from "react";
import { UsePostsOutlineDisplay } from "./hooks/usePostsOutlineDisplay";

const PostsOutline = ({
  theme,
  photo,
  name,
  username,
  timestamp,
  displayItems,
}) => {
  const TimelineComponent = UsePostsOutlineDisplay({
    theme,
    photo,
    name,
    username,
    timestamp,
    //displayItems
});
  console.log(photo, TimelineComponent);
  return (
      <Suspense fallback="Loading...">{TimelineComponent}</Suspense>
  );
};

export default PostsOutline;
