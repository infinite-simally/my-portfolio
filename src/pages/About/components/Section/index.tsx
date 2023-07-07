import Text from "components/Text";
import styles from "./Section.module.scss";
import clsx from "clsx";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  className?: string;
};
const Section = ({ icon, title, description, className }: Props) => {
  return (
    <div className={clsx(className, styles.Container)}>
      <div className={styles.Header}>
        {icon}
        <Text className={styles.Title} tag='h6'>
          {title}
        </Text>
      </div>

      <hr className={clsx(styles[title], styles.Line)} />
      <div className={styles.Description}>{description}</div>
    </div>
  );
};

export default Section;
