import { useEffect, useRef } from "react";

import { clsx } from "clsx";
import styles from "./Menu.module.scss";

const Menu = ({ children, isOpen, onClose, triggerElem }: any) => {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseClick, false);
    return document.removeEventListener("mousedown", handleMouseClick, false);
  });

  const handleMouseClick = (event: Event): void => {
    if (node.current?.contains(event.target as Node)) {
      return; // continue
    }

    // check if click happened outside of element
    if (isOpen) {
      onClose();
    }
  };

  return (
    <div ref={node} className={styles.Container}>
      <div className={styles.Trigger}>{triggerElem}</div>
      <div className={clsx(styles.Menu, isOpen && styles.Menu___open)}>
        {children}
      </div>
    </div>
  );
};

export default Menu;
