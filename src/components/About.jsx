import React from 'react';
import '../style/Home.scss';

const Home = () => (
  <div className="home border-0 rounded-0">
    <div className="card-home">
      <h5 className="card-title">
        Hello my name is
        <a className="card__link" href="https://github.com/Wusinho" target="_blank" rel="noreferrer"> Heber Lazo</a>
      </h5>
      <p className="card-title">It is game catalogue using React and Redux, It has a home page with information, and on the navbar it is possible see all the champion in the game League of Legends, it is possible to see a specific champion with a small description.</p>
      <h3>Built with</h3>
      <ul>
        <li>JavaScript</li>
        <li>Html</li>
        <li>Scss</li>
        <li>React</li>
        <li>Redux</li>
        <li>Bootstrap</li>
        <li>Package.json</li>
        <li>Rails Api</li>
      </ul>
      <a className="card-title link" href="https://github.com/Wusinho/React-Redux-Catalogue" target="_blank" rel="noreferrer">Link to Repo</a>
    </div>
  </div>
);

export default Home;
