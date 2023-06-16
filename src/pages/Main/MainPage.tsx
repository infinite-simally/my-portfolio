import { useContext } from "react";
import Switch from "../../components /Switch/Switch";
import "./MainPage.css";
import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";
import Text from "../../components /Text/Text";
import Link from "../../components /Link/Link";
import DecorativeLine from "../../components /DecorativeLine/DecorativeLine";
// import ThreeContainer from "../../components /ThreeContainer/ThreeContainer";
// import Sphere from "../../components /Sphere/Sphere";

const MainPage = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const navLinks = ["About", "Contact Me"].map((link) => (
    <Link className='nav-link' href=''>
      <Text type='h3' fontSize={20} textTransform='uppercase' fontWeight={200}>
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
          {/* Desorative lines */}
          <DecorativeLine
            color='red'
            width='3.25rem'
            rotate='90deg'
            linePosition={{ top: "2rem" }}
          />
          <div className='vertical-line' />
          <div className='horizontal-line' />

          <Text
            type='h1'
            fontSize='3.25rem'
            fontFamily='"Italiana", sans-serif'
            className='title'
          >
            Yana Kortelova
          </Text>
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
