import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";

import Switch from "../../components /Switch/Switch";
import Text from "../../components /Text/Text";
import Link from "../../components /Link/Link";
import Header from "./components/Header/Header";

import styles from "./MainPage.module.scss";
import Slogan from "./components/Slogan/Slogan";

import ThreeContainer from "../../components /ThreeContainer/ThreeContainer";
import Sphere from "./components/Spheres/Spheres";
import Location from "./components/Location/Location";

const MainPage = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const navLinks = ["About", "Contact Me"].map((link) => (
    <Link className={styles.NavLink} href=''>
      <Text tag='h3' fontSize={20} textTransform='uppercase' fontWeight={200}>
        {link}
      </Text>
    </Link>
  ));

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <ThreeContainer className={styles.CanvasContainer}>
          <pointLight position={[10, 10, 10]} castShadow />
          <ambientLight intensity={0.1} />
          <directionalLight position={[0.5, 0.5, 1]} color='#505050' />
          <Sphere position={[0, 0, 0]} />
        </ThreeContainer>
        <div className={styles.HeaderWrap}>
          <Header />
          <div className={styles.Nav}>
            {navLinks}
            <Switch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          </div>
        </div>
        <Slogan />
        <Location />
      </div>
    </div>
  );
};

export default MainPage;
