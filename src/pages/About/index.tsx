import PageContainer from "components/PageContainer ";
import DecorativeLine from "components/DecorativeLine";
import Section from "./components/Section";

import YanaImg from "assets/images/yana.png";

import { ReactComponent as EducationIcon } from "assets/icons/education.svg";

import styles from "./About.module.scss";

const AboutPage = () => {
  return (
    <PageContainer>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <img className={styles.Portrait} src={YanaImg} alt='Yana Kortelova' />
          <Section
            title='Education'
            description='National Technical University of Ukraine'
            style={{ top: "-7rem", right: "2rem" }}
            line={
              <>
                <DecorativeLine
                  height='12rem'
                  rotate='-45deg'
                  linePosition={{ left: "3.5rem", top: "1.25rem" }}
                />
              </>
            }
            icon={<EducationIcon />}
          />
        </div>

        {/* <Section
          title='Career'
          description='Lorem Ipsum'
          style={{ top: "3.25rem", left: "15rem" }}
          line={
            <>
              <DecorativeLine
                height='25rem'
                rotate='-90deg'
                linePosition={{ top: "-9.5rem", right: "0" }}
              />
              <DecorativeLine
                height='16rem'
                rotate='-45deg'
                linePosition={{ left: "-3rem", top: "1rem" }}
              />
            </>
          }
          icon={<EducationIcon />}
        /> */}
      </div>
    </PageContainer>
  );
};

export default AboutPage;
