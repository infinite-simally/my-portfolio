import { Props } from "./Tooltip.types";

import styles from "./Tooltip.module.scss";

const Tooltip = ({ children, tooltipText, variant = "top" }: Props) => {
  return (
    <div className={styles.Container}>
      {children}

      <div data-placement={variant} className={styles.Tooltip}>
        {tooltipText}
      </div>
    </div>
  );
};

export default Tooltip;
