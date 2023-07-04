import Text from "../../../../components /Text";
import styles from "./Section.module.scss";

const Section = ({ line, icon, title, description }: any) => {
  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.Header}>
          {icon}{" "}
          <Text className={styles.Title} tag='h6'>
            {title}
          </Text>
        </div>
        <div>
          <Text tag='p'>{description}</Text>
        </div>
        {line}
      </div>
    </div>
  );
};

export default Section;
