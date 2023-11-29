import React from "react";
import "./App.css";
import { Navbar, Hero, Companies, Features, Services, NewsLetter } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Services />
      <NewsLetter />
    </div>
  );
}

export default App;
