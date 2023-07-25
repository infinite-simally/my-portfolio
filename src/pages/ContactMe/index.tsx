import PageContainer from "components/PageContainer ";
import Text from "components/Text";

import styles from "./ContactMe.module.scss";

const ContactMePage = () => {
  return (
    <PageContainer>
      <div className={styles.Content}>
        <div>form</div>
        <div>animation</div>
      </div>
      <div className={styles.cprNotice}>
        <Text>© 2023 all rights to be</Text>{" "}
        <Text className={styles.cprNotice___hglWord}>creative</Text>
      </div>
    </PageContainer>
  );
};

export default ContactMePage;
