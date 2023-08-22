import React, { useState } from "react";
import "./Tooltip.scss";

const Tooltip = ({ text, direction, children }) => {
  const [toolTipIsActive, setToolTipIsActive] = useState(false);

  const showToolTip = () => {
    setToolTipIsActive(true);
  };
  const hideToolTip = () => {
    setToolTipIsActive(false);
  };

  return (
    <div
      className="Tooltip"
      onMouseEnter={showToolTip}
      onMouseLeave={hideToolTip}
    >
      {children}
      {toolTipIsActive && (
        <div className={`Tooltip__content ${direction}`}>{text}</div>
      )}
    </div>
  );
};

export default Tooltip;
