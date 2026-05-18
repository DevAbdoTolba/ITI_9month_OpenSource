import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import PortfolioSection from "./components/PortfolioSection";
import FooterSection from "./components/FooterSection";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loaded: true,
    };
  }

  render() {
    return (
      <>
        <div className="App">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <PortfolioSection />
          <FooterSection />
        </div>
      </>
    );
  }
}

export default App;
