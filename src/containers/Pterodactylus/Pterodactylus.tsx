import React from 'react';
import pteroImg from "../../assets/PterodactylusInfobox.webp";

const Pterodactylus = () => {
  return (
    <div className="mt-2">
      <div className="card" style={{width: "18rem"}}>
        <img src={pteroImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Pterodactylus</h5>
          <p className="card-text">Pterodactylus (from Greek pterodáktylos (πτεροδάκτυλος) meaning 'winged finger'[2]) is an extinct genus of pterosaurs. It is thought to contain only a single species, Pterodactylus antiquus, which was the first pterosaur to be named and identified as a flying reptile.
            Fossil remains of Pterodactylus have primarily been found in the Solnhofen limestone of Bavaria, Germany, which dates from the Late Jurassic period (early Tithonian stage), about 150.8 to 148.5 million years ago. More fragmentary remains of Pterodactylus have tentatively been identified from elsewhere in Europe and in Africa.</p>
        </div>
      </div>
    </div>
  );
};

export default Pterodactylus;