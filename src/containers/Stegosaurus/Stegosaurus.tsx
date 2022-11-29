import React from 'react';
import stegoImg from '../../assets/stegosaurus.png';

const Stegosaurus = () => {
  return (
    <div className="mt-2">
      <div className="card" style={{width: "18rem"}}>
        <img src={stegoImg} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Stegosaurus</h5>
            <p className="card-text">Stegosaurus (/ˌstɛɡəˈsɔːrəs/;[1] lit. 'roof-lizard') is a genus of herbivorous, four-legged, armored dinosaur from the Late Jurassic, characterized by the distinctive kite-shaped upright plates along their backs and spikes on their tails.</p>
          </div>
      </div>
    </div>
  );
};

export default Stegosaurus;