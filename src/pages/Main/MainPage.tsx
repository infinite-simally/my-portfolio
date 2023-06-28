import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";

import Header from "./components/Header/Header";
import Slogan from "./components/Slogan/Slogan";
import Location from "./components/Location/Location";
import MainAnimation from "./components/MainAnimation/MainAnimation";

import styles from "./MainPage.module.scss";
import NavBar from "./components/NavBar/NavBar";
import useWindowDimensions from "../../hooks/useWindowDimension";

const MainPage = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <MainAnimation />

        <div className={styles.HeaderWrap}>
          <Header currentWidth={width} />
          <NavBar
            currentWidth={width}
            isDarkTheme={isDarkTheme}
            toggleTheme={toggleTheme}
          />
        </div>

        <Slogan />
        <Location />
      </div>
    </div>
  );
};

export default MainPage;
