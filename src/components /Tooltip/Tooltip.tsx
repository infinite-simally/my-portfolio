import { useState } from "react";

const Tooltip = () => {
  const [isHovered, setHover] = useState<boolean>(false);

  const tooltipStyle = {
    display: isHovered ? "block" : "none",
  };

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div>
      <div
        onMouseOver={handleMouseIn.bind(this)}
        onMouseOut={handleMouseOut.bind(this)}
      >
        on hover here we will show the tooltip
      </div>
      <div>
        <div style={tooltipStyle}>this is the tooltip!!</div>
      </div>
    </div>
  );
};

export default Tooltip;
