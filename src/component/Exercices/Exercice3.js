import React from 'react';
import Navigation from '../Navigation';
import Button from "@material-ui/core/button";

const affichageConsole = () => {
    console.log("affichage du bouton material en console");
  };

const Exercice3 = () => {
    return (
        <div>
            <Navigation/>
            <Button
        variant="contained"
        onClick={() => {
          affichageConsole();
        }}
      >
        clik pour afficher un message en console
      </Button>
        </div>
    );
};

export default Exercice3;