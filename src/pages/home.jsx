import React from "react";
import "./styles.scss";

const Home =() => {
  document.title = "Ren Estep: Creator Of Things";
  return (
    <section className="Hero" aria-label="Hero Section">
      <div className="Hero__card">
      <h1 className="ResumePage__card-title">
          I am a creator of things...
        </h1>
        <p className="Hero__card-text">
          I was once told that you should be able to tell someone concisely what
          you do in the time it takes you to ride in an elevator. In three words
          I would say:
        </p>
        <p className="Hero__card-text">Coding, Coloring, &#38; Cardio.</p>
      </div>
    </section>
  );
};

export default Home;
