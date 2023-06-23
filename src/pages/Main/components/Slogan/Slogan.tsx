import Text from "../../../../components /Text/Text";

import styles from "./Slogan.module.scss";

const Slogan = () => {
  const uniqueWord = (className?: string) => (
    <Text tag='h2' className={`${className} ${styles.UniqueWord}`}>
      Unique
    </Text>
  );
  const restText = (text: string, className?: string) => (
    <Text tag='h2' className={`${className} ${styles.ReastText}`}>
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
