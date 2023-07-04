import styles from "./PageContainer.module.scss";

import { Props } from "./Pagecontainer.types";

const PageContainer = ({ children }: Props) => {
  return <div className={styles.Container}>{children}</div>;
};

export default PageContainer;
