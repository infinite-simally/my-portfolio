import PageContainer from "components/PageContainer ";
import Text from "components/Text";
import Link from "components/Link";
import Section from "./components/Section";

import YanaImg from "assets/images/yana.png";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";

import { sectionsData } from "./staticData";

import styles from "./About.module.scss";
import { sectionsData } from "./staticData";

const AboutPage = () => {
  const { career, education, about, hobbies } = sectionsData;

  return (
    <PageContainer>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <Section {...career} />
          <Section {...education} />
          <Section {...about} />

          <div className={styles.PortraitContainer}>
            <img
              className={styles.Portrait}
              src={YanaImg}
              alt='Yana Kortelova'
            />
          </div>

          <Section {...hobbies} />

          <div className={styles.SocialMedia}>
            <Text>Follow for more:</Text>
            <Link href='https://www.instagram.com/infinite.simally/'>
              <InstagramIcon className={styles.InstagramLink} />
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
