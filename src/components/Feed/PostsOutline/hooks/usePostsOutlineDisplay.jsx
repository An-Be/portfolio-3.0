import React, { useState, useEffect, lazy } from "react";
import { THEME } from "../constants";
import { POST_DISPLAY_ITEMS } from "../../../utils/feedConstants";

const AsyncPost = lazy(() => import("../../Post/Post"));
const AsyncProject = lazy(() => import("../../Project/Project"));
const AsyncAbout = lazy(() => import("../../About/About"));
const AsyncContact = lazy(() => import("../../Contact/Contact"));

export const UsePostsOutlineDisplay = ({ theme = THEME.POST, ...props }) => {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    switch (theme) {
      case THEME.POST:
        setComponent(<AsyncPost theme={theme} {...props} />);
        break;
      case THEME.PROJECT:
        setComponent(<AsyncProject theme={theme} {...props} />);
        break;
      case THEME.ABOUT:
        setComponent(<AsyncAbout theme={theme} {...props} />);
        break;
      case THEME.CONTACT:
        setComponent(<AsyncContact theme={theme} {...props} />);
        break;
    }
  }, [theme, JSON.stringify(props)]);

  return Component;
};
