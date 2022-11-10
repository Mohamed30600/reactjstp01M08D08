import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>

            <ul>
                <NavLink to ="/" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to ="/exercice/1" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Exercice 1</li>
                </NavLink>
                <NavLink to ="/exercice/2" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Exercice 2</li>
                </NavLink>
                <NavLink to ="/exercice/3" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Exercice 3</li>
                </NavLink>
                <NavLink to ="/exercice/4" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Exercice 4</li>
                </NavLink>
                <NavLink to ="/exercice/5" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Exercice 5</li>
                </NavLink>
                <NavLink to ="/exercice/6" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Exercice 6</li>
                </NavLink>
                <NavLink to ="country/france" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Donnee Api France</li>
                </NavLink>
                <NavLink to ="country/german" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Donnee Api German</li>
                </NavLink>
                <NavLink to ="country/canada" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Donnee Api Canada</li>
                </NavLink>
                <NavLink to ="/documentation" className={(nav)=>(nav.isActive ? "nav-active": "")}>
                    <li>Documentation</li>
                </NavLink>
                
            </ul>

            
        </div>
    );
};

export default Navigation;