import PageContainer from "../../components /PageContainer ";
import DecorativeLine from "../../components /DecorativeLine";
import Section from "./components/Section/Section";

import YanaImg from "../../assets/images/yana.png";

import { ReactComponent as EducationIcon } from "../../assets/icons/education.svg";

import styles from "./About.module.scss";

const AboutPage = () => {
  return (
    <PageContainer>
      <img className={styles.Portrait} alt='Yana Kortelova' src={YanaImg} />

      <div className={styles.Sections}>
        <Section
          title='Education'
          description='Lorem Ipsum'
          line={
            <>
              <DecorativeLine
                height='8rem'
                rotate='-45deg'
                linePosition={{ left: "2.85rem", top: "1.85rem" }}
              />
              <DecorativeLine
                height='20rem'
                rotate='90deg'
                linePosition={{ top: "-7rem", right: "2rem" }}
              />
            </>
          }
          icon={<EducationIcon />}
        />
      </div>
    </PageContainer>
  );
};

export default AboutPage;
