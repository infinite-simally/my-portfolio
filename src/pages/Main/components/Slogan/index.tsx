import Text from "components/Text";
import UniqueWord from "./UniqueWord";

import styles from "./Slogan.module.scss";

const Slogan = () => {
  const restText = (text: string, className?: string) => (
    <Text tag='h2' className={`${className} ${styles.ReastText}`}>
      {text}
    </Text>
  );

  return (
    <div className={styles.Wrapper}>
      <Text tag='blockquote' className={styles.Container}>
        <div className={styles.Row}>
          <UniqueWord />
          {restText("websites")}
        </div>

        <div className={styles.Row}>
          {restText("For your", styles.Row___marginRight)}

          <UniqueWord />
        </div>
        <div className={styles.Row}>{restText("Bussiness")}</div>
        <div className={styles.Row}>
          <Text className={styles.TagLine} tag='p'>
            creating websites for clients all over the world
          </Text>
        </div>
      </Text>
    </div>
  );
};

export default Slogan;
