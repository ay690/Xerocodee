import React from "react";
import "./App.css";
import { Navbar, Hero, Companies, } from "./components";
import { logo } from "./assets"

function App() {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
}

export default App;
