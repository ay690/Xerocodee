import React from "react";
import "./App.css";
import { Navbar, Hero, Companies, Features, Services } from "./components";
import { logo } from "./assets";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Services />
    </div>
  );
}

export default App;
