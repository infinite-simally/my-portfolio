import { useContext } from "react";
import Switch from "../../components /Switch/Switch";
import "./MainPage.css";
import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";
import ThreeContainer from "../../components /ThreeContainer/ThreeContainer";
import Sphere from "../../components /Sphere/Sphere";

const MainPage = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <ThreeContainer className='canvas-container'>
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        <Sphere position={[1, 0, 0]} wireframe={true} />
        {/* <Sphere position={[1.2, 0, 0]} /> */}
      </ThreeContainer>
      <div className='main-page-container'>
        <div className='header-wrapp'>
          <div className='vertical-line' />
          <div className='horizontal-line' />
          <span className='title'>Yana Kortelova</span>
        </div>
        <Switch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default MainPage;
