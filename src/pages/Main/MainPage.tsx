import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";

import Switch from "../../components /Switch/Switch";
import Text from "../../components /Text/Text";
import Link from "../../components /Link/Link";

import "./MainPage.css";
import Header from "./components/Header/Header";

// import ThreeContainer from "../../components /ThreeContainer/ThreeContainer";
// import Sphere from "../../components /Sphere/Sphere";

const MainPage = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

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
        <Header isDarkTheme />
        <div className='nav'>
          {navLinks}
          <Switch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
