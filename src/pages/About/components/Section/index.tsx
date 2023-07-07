import Text from "components/Text";
import styles from "./Section.module.scss";
import clsx from "clsx";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
};
const Section = ({ icon, title, description }: Props) => {
  return (
    <div className={clsx(styles.Container, styles[title])}>
      <div className={styles.Header}>
        {icon}
        <Text className={styles.Title} tag='h6'>
          {title}
        </Text>
      </div>
      <div className={clsx(styles[title], styles.Line)}></div>
      <div className={styles.Description}>{description}</div>
    </div>
  );
};

export default Section;
