import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";

import Switch from "../../components /Switch/Switch";
import Text from "../../components /Text/Text";
import Link from "../../components /Link/Link";
import DecorativeLine from "../../components /DecorativeLine/DecorativeLine";

import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";

import "./MainPage.css";
import colors from "../../styles/color-variables.module.scss";
// import ThreeContainer from "../../components /ThreeContainer/ThreeContainer";
// import Sphere from "../../components /Sphere/Sphere";

const MainPage = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const decorLineColor = isDarkTheme
    ? colors.lightHeadersColor
    : colors.darkHeadersColor;

  const navLinks = ["About", "Contact Me"].map((link) => (
    <Link className='nav-link' href=''>
      <Text tag='h3' fontSize={20} textTransform='uppercase' fontWeight={200}>
        {link}
      </Text>
    </Link>
  ));

  return (
    // <div style={{ position: "relative" }}>
    //   <ThreeContainer className='canvas-container'>
    //     <pointLight position={[10, 10, 10]} castShadow />
    //     <ambientLight castShadow />
    //     <directionalLight castShadow />
    //     <Spheres position={[1, 0, 0]} wireframe={true} />
    //   </ThreeContainer>
    <div className='main-page-container'>
      <div className='header-wrap'>
        <div className='logo-wrapp'>
          <DecorativeLine
            color={decorLineColor}
            height='12rem'
            linePosition={{ top: "2rem" }}
          />
          <DecorativeLine
            rotate='90deg'
            color={decorLineColor}
            height='3rem'
            linePosition={{ top: "0.5rem", left: "1.5rem" }}
          />

          <Text
            tag='h1'
            fontSize='3.25rem'
            fontFamily='"Italiana", sans-serif'
            className='title'
          >
            Yana Kortelova
          </Text>

          <LinkedinIcon className='work-profiles' />
        </div>

        <div className='nav'>
          {navLinks}
          <Switch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
