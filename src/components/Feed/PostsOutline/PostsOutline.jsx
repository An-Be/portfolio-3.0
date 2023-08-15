import React, { Suspense } from "react";
import { UsePostsOutlineDisplay } from "./hooks/usePostsOutlineDisplay";

const PostsOutline = ({
  theme,
  photo,
  name,
  username,
  timestamp,
}) => {
  const TimelineComponent = UsePostsOutlineDisplay({
    theme,
    photo,
    name,
    username,
    timestamp,
});
  return (
      <Suspense fallback="Loading...">{TimelineComponent}</Suspense>
  );
};

export default PostsOutline;
