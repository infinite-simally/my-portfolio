import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext/ThemeProvider";

import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Location from "./components/Location";
import MainAnimation from "./components/MainAnimation";

import styles from "./MainPage.module.scss";
import NavBar from "./components/NavBar";
import useWindowDimensions from "hooks/useWindowDimension";
import PageContainer from "components/PageContainer ";

const MainPage = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  return (
    <div className={styles.Wrapper}>
      <PageContainer>
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
      </PageContainer>
    </div>
  );
};

export default MainPage;
