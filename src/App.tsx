import "App.scss";

// PAGES
import AboutPage from "pages/About";
import ContactMePage from "pages/ContactMe";
import MainPage from "pages/Main";

function App() {
  return (
    <div className='App'>
      <MainPage />
      <AboutPage />
      <ContactMePage />
    </div>
  );
}

export default App;
