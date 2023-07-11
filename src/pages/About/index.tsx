import PageContainer from "components/PageContainer ";
import Text from "components/Text";
import Section from "./components/Section";

import YanaImg from "assets/images/yana.png";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";

import styles from "./About.module.scss";
import { sectionsData } from "./staticData";

const AboutPage = () => {
  return (
    <PageContainer>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <Section {...sectionsData.career} />
          <Section {...sectionsData.education} />
          <Section {...sectionsData.about} />

          <div className={styles.PortraitContainer}>
            <img
              className={styles.Portrait}
              src={YanaImg}
              alt='Yana Kortelova'
            />
          </div>

          <Section {...sectionsData.hobbie} />

          <div className={styles.SocialMedia}>
            <Text>Follow for more:</Text>
            <InstagramIcon />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
