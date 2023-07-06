import Text from "components/Text";
import styles from "./Section.module.scss";
import { CSSProperties } from "react";
import clsx from "clsx";

type Props = {
  icon: React.ReactNode;
  title: string;
  topLineSize: string;
  description: React.ReactNode;
  style: CSSProperties;
};
const Section = ({ icon, title, topLineSize, description, style }: Props) => {
  return (
    <div style={{ position: "absolute", ...style }}>
      <div className={styles.Header}>
        {icon}
        <Text className={styles.Title} tag='h6'>
          {title}
        </Text>
      </div>

      <hr
        className={clsx(styles[title], styles.Line)}
        style={{ width: topLineSize }}
      />
      <div className={styles.Description}>{description}</div>
    </div>
  );
};

export default Section;
