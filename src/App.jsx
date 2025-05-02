import React from "react";
import { About, Hero, Navbar } from "./components";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      {/* <section className="z-0 min-h-screen" /> */}
    </main>
  );
};

export default App;
