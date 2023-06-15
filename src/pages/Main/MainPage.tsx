import { useContext } from "react";
import Switch from "../../components /Switch/Switch";
import "./MainPage.css";
import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";
import Text from "../../components /Text/Text";
import Link from "../../components /Link/Link";
// import ThreeContainer from "../../components /ThreeContainer/ThreeContainer";
// import Sphere from "../../components /Sphere/Sphere";

const MainPage = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const navLinks = ["About", "Contact Me"].map((link) => (
    <Link href=''>
      <Text type='h3' fontSize={24} textTransform='uppercase' fontWeight={200}>
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
      <div className='header-wrapp'>
        {/* Desorative lines */}
        <div className='vertical-line' />
        <div className='horizontal-line' />

        <Text
          type='h1'
          fontSize='3.25rem'
          fontFamily='"Italiana", serif'
          className='title'
        >
          Yana Kortelova
        </Text>
      </div>

      <div className='nav'>
        <div>{navLinks}</div>
        <Switch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </div>
    </div>
    // </div>
  );
};

export default MainPage;
