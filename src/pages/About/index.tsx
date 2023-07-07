import PageContainer from "components/PageContainer ";
import Text from "components/Text";
import Section from "./components/Section";

import YanaImg from "assets/images/yana.png";

import { ReactComponent as EducationIcon } from "assets/icons/education.svg";

import styles from "./About.module.scss";

const AboutPage = () => {
  return (
    <PageContainer>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <Section
            title='Career'
            description={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <Text>National Technical University of Ukraine</Text>

                <Text style={{ fontWeight: 200, fontSize: "0.85rem" }}>
                  Bachelor degreee, Computer Science
                </Text>
              </div>
            }
            icon={<EducationIcon />}
          />

          <Section
            title='Education'
            description={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <Text>National Technical University of Ukraine</Text>

                <Text style={{ fontWeight: 200, fontSize: "0.85rem" }}>
                  Bachelor degreee, Computer Science
                </Text>
              </div>
            }
            icon={<EducationIcon />}
          />

          <Section
            title='About'
            description={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <Text>National Technical University of Ukraine</Text>

                <Text style={{ fontWeight: 200, fontSize: "0.85rem" }}>
                  Bachelor degreee, Computer Science
                </Text>
              </div>
            }
            icon={<EducationIcon />}
          />

          <img className={styles.Portrait} src={YanaImg} alt='Yana Kortelova' />

          <Section
            title='Hobbie'
            description={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <Text>National Technical University of Ukraine</Text>

                <Text style={{ fontWeight: 200, fontSize: "0.85rem" }}>
                  Bachelor degreee, Computer Science
                </Text>
              </div>
            }
            icon={<EducationIcon />}
          />

          <div className={styles.SocialMedia}>
            <Text>Follow for more: INSTAGRAM</Text>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
