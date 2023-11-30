import React from "react";
import "./App.css";
import { Navbar, Hero, Companies, Features, Services, NewsLetter, BlueBg } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Services />
      <BlueBg />
      {/* <NewsLetter /> */}
    </div>
  );
}

export default App;
