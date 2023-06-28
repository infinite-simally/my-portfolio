import { useState } from "react";

import { Props } from "./Tooltip.types";

import styles from "./Tooltip.module.scss";

const Tooltip = ({ children, tooltipText, variant = "top" }: Props) => {
  const [isHovered, setHover] = useState<boolean>(false);

  const tooltipStyle = {
    display: isHovered ? "flex" : "none",
  };

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div className={styles.Container}>
      <div
        onMouseOver={handleMouseIn.bind(this)}
        onMouseOut={handleMouseOut.bind(this)}
      >
        {children}
      </div>
      <div data-placement={variant} className={styles.Tooltip}>
        {tooltipText}
      </div>
    </div>
  );
};

export default Tooltip;
