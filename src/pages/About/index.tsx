import YanaImg from "../../assets/images/yana.png";

import styles from "./About.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.PortraitContainer}>
        <img className={styles.Portrait} alt='Yana Kortelova' src={YanaImg} />
      </div>
    </div>
  );
};

export default AboutPage;
