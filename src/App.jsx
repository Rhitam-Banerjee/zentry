import React from "react";
import { About, Features, Hero, Navbar } from "./components";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <section className="z-0 min-h-screen" />
    </main>
  );
};

export default App;
