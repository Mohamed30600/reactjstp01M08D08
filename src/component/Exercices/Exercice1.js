import React from 'react';
import Navigation from '../Navigation';
import CustomButton from './CustomButton';

const Exercice1 = () => {
    return (
        <div>
            <div>
            <Navigation/>
            </div>
            <CustomButton
        text="Click-me !"
        action={() => alert("You just click me :o")}
      />
        </div>
    );
};

export default Exercice1;