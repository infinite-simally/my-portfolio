import Text from "../../../../components /Text/Text";

import styles from "./Slogan.module.scss";
import { Props as TextProps } from "../../../../components /Text/Text.types";

const Slogan = () => {
  const commonStyle = {
    tag: "h2",
    fontSize: "3rem",
    textTransform: "uppercase",
  } as TextProps;

  const uniqueWord = (className?: string) => (
    <Text
      className={className}
      {...commonStyle}
      fontFamily='"Italiana", sans-serif'
    >
      Unique
    </Text>
  );
  const restText = (text: string, className?: string) => (
    <Text {...commonStyle} fontWeight={900} className={className}>
      {text}
    </Text>
  );

  return (
    <div className={styles.Wrapper}>
      <Text tag='blockquote' className={styles.Container}>
        <div className={styles.Row}>
          {uniqueWord(styles.Row___marginRight)} {restText("websites")}
        </div>

        <div className={styles.Row}>
          {restText("For your", styles.Row___marginRight)}
          {uniqueWord()}
        </div>
        <div className={styles.Row}>{restText("Bussiness")}</div>
      </Text>
    </div>
  );
};

export default Slogan;
