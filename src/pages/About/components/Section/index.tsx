import Text from "components/Text";
import styles from "./Section.module.scss";

const Section = ({
  line,
  icon,
  title,
  topLineSize,
  description,
  style,
}: any) => {
  return (
    <div style={{ position: "absolute", ...style }}>
      <div className={styles.Container}>
        <div className={styles.Header}>
          {icon}{" "}
          <Text className={styles.Title} tag='h6'>
            {title}
          </Text>
        </div>
        <hr className={styles.Line} style={{ width: topLineSize }} />
        <div className={styles.Description}>
          <Text tag='p'>{description}</Text>
        </div>
        {/* {line} */}
      </div>
    </div>
  );
};

export default Section;
