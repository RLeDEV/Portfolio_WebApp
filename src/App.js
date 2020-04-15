import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header";
import About from './Components/About';
import Frameworks from './Components/Platforms';
import Resume from './Components/Resume';
import KeepTouch from './Components/KeepTouch';
import Portfolio2 from './Components/Portfolio2';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About
          title="Section 1"
          id="section1"
        />
        <Resume
          title="Section 2"
          id="section2"
        />
        <KeepTouch 
          id="KeepTouch"
        />
        <Portfolio2
          title="Section 3"
          id="section3"
        />
        <Frameworks
          title="Section 5"
          id="section5"
        />
      </div>
    );
  }
}

export default App;
