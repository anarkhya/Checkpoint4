/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../components/Header';

const Home = ({ titleh1, titleh2 }) => {
  return (
    <div className="home">
      <Header />
      <section className="welcome">
        <img src="../images/hero.jpg" alt="two astronauts on Mars" />
        <h1>{titleh1}</h1>
      </section>
      <section className="about">
        <h2>{titleh2}</h2>
        <p>
          In the allegory, Socrates describes a group of people who have lived
          chained to the wall of a cave all their lives, facing a blank wall.
          The people watch shadows projected on the wall from objects passing in
          front of a fire behind them and give names to these shadows. The
          shadows are the prisoners&apos; reality, but are not accurate
          representations of the real world. Three higher levels exist: the
          natural sciences; mathematics, geometry, and deductive logic; and the
          theory of forms. Socrates explains how the philosopher is like a
          prisoner who is freed from the cave and comes to understand that the
          shadows on the wall are actually not reality at all. A philosopher
          aims to understand and perceive the higher levels of reality. However,
          the other inmates of the cave do not even desire to leave their
          prison, for they know no better life.
        </p>
      </section>
    </div>
  );
};

export default Home;
