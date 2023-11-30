import React from "react";
import "./App.css";
import { Navbar, Hero, Companies, Features, Services, NewsLetter, BlueBg, PageOne, PageTwo, PageThree } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Services />
      <BlueBg />
      <PageOne />
      <PageTwo />
      <PageThree />
      {/* <NewsLetter /> */}
    </div>
  );
}

export default App;
