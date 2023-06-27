import Text from "../../../../components /Text/Text";
import UniqueWord from "./UniqueWord/UniqueWord";

import styles from "./Slogan.module.scss";

const Slogan = () => {
  // const uniqueWord = (className?: string) => (
  //   <Text tag='h2' className={`${className} ${styles.UniqueWord}`}>
  //     Unique
  //   </Text>
  // );
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
          {/* {uniqueWord(styles.Row___marginRight)} */}
          {restText("websites")}
        </div>

        <div className={styles.Row}>
          {restText("For your", styles.Row___marginRight)}

          <UniqueWord />
          {/* {uniqueWord()} */}
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
