import PageContainer from "components/PageContainer ";
import Text from "components/Text";
import Section from "./components/Section";

import YanaImg from "assets/images/yana.png";

import { ReactComponent as EducationIcon } from "assets/icons/education.svg";
import { ReactComponent as InfoIcon } from "assets/icons/info.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";
import { ReactComponent as CareerIcon } from "assets/icons/work.svg";

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
            icon={<CareerIcon />}
          />

          <Section
            title='Education'
            description={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "10px",
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
            icon={<InfoIcon />}
          />

          <div className={styles.PortraitContainer}>
            <img
              className={styles.Portrait}
              src={YanaImg}
              alt='Yana Kortelova'
            />
          </div>

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
            <Text>Follow for more:</Text>
            <InstagramIcon />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
