import { useState } from "react";

import useWindowDimensions from "hooks/useWindowDimension";

import { breakpoints } from "constants/responsive";

import { clsx } from "clsx";
import styles from "./UniqueWord.module.scss";

const UniqueWord = () => {
  const { width } = useWindowDimensions();
  const panelDivsLength =
    width <= breakpoints.mobile ? 5 : width <= breakpoints.tablet ? 6 : 8;

  const [hovered, setIsHovered] = useState(false);

  const panelDivs = [...Array(panelDivsLength)].map((el, index) => (
    <div
      key={index}
      className={clsx(styles.Panel, hovered && styles.Panel___hovered)}
    />
  ));
  return (
    <div className={styles.Container}>
      <div
        className={styles.Banner}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {panelDivs}
      </div>
    </div>
  );
};

export default UniqueWord;
