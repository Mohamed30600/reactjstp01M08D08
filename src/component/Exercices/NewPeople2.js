import React, { useState } from "react";

const NewPeople2 = () => {
  const [nom2, setNom2] = useState("");
  const [prenom2, setPrenom2] = useState("");
  const [baffiche2, setBaffiche2] = useState(false);

  const identiter2 = () => {
    setBaffiche2(!baffiche2);
  };
  return (
    <div>
      <input
        label="Nom2"
        placeholder="nom2"
        onChange={(e) => {
          setNom2(e.target.value);
        }}
      />
      <input
        label="Prenom2"
        placeholder="prenom2"
        onChange={(e) => {
          setPrenom2(e.target.value);
        }}
      />
      <button onClick={identiter2}>valider</button>
      {baffiche2 && (
        <p>
          votre identire est {nom2} {prenom2}
        </p>
      )}
    </div>
  );
};

export default NewPeople2;
