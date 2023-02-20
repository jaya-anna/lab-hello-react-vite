import { useState } from "react";

import ironhackLogo from "./assets/ironhack-logo.png";
import logo2 from "./assets/logo2.png";
import setting2 from "./assets/setting2.png";
import page from "./assets/page.png";
import setting from "./assets/setting.png";
import protocoll from "./assets/protocoll.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <section className="section1">
        <div className="logo-position">
          <a href="" target="_blank">
            <img src={ironhackLogo} className="logo1" alt="ironhack logo" />
          </a>
          <a href="" target="_blank">
            <img src={logo2} className="logo1" alt="capital logo" />
          </a>
        </div>
        <div className="introduction-text">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
        </div>
        <button className="button"> Awesome!</button>
      </section>

      <section id="section2">
        <div className="container-box">
          <a href="" target="_blank">
            <img src={setting2} className="section2-logo" alt="capital logo" />
          </a>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive Uls.</p>
        </div>

        <div className="container-box">
          <a href="" target="_blank">
            <img src={page} className="section2-logo" alt="capital logo" />
          </a>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="container-box">
          <a href="" target="_blank">
            <img src={setting} className="section2-logo" alt="capital logo" />
          </a>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className="container-box">
          <a href="" target="_blank">
            <img src={protocoll} className="section2-logo" alt="capital logo" />
          </a>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
