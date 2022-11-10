import React from 'react';
import Navigation from '../Navigation';

const Documentation = () => {
    return (
        <div>
            <Navigation/>
            <h1>L'url d'accès à chaque exercice devra être du type : http://localhost:3000/exercice/1</h1>
            <h2>Lien API</h2>
            <p>http://api.countrylayer.com/v2/name/[name]?access_key=f95dc4c9995eaf0e3bdffe08843527b0</p>
            <h3>dependance</h3>
            <p>axios,react-router-dom,material</p>
        </div>
    );
};

export default Documentation;