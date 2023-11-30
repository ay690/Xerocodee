import React from "react";
import "./App.css";
import { Navbar, Hero, Companies, Features, Services, NewsLetter, BlueBg, PageOne, PageTwo, PageThree, Success, Footer } from "./components";

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
      <Success />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
