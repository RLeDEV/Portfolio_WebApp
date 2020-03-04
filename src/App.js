import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header";
import About from './Components/About';
import Frameworks from './Components/Platforms';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import KeepTouch from './Components/KeepTouch';
import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Resume
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <KeepTouch 
          id="KeepTouch"
        />
        <Portfolio
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Frameworks
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
