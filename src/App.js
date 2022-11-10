import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./component/pages/Home";
import Documentation from "./component/pages/Documentation";
import Exercice1 from "./component/Exercices/Exercice1";
import Exercice2 from "./component/Exercices/Exercice2";
import Exercice3 from "./component/Exercices/Exercice3";
import Exercice4 from "./component/Exercices/Exercice4";
import Exercice5 from "./component/Exercices/Exercice5";
import Exercice6 from "./component/Exercices/Exercice6";
import Country from "./component/Exercices/Country";



const App = () => {
  return (
    <div className="App">
      <h1>TP React</h1>
      <p>Start editing to see some magic happen!</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercice/1" element={<Exercice1 />} />
          <Route path="/exercice/2" element={<Exercice2 />} />
          <Route path="/exercice/3" element={<Exercice3 />} />
          <Route path="/exercice/4" element={<Exercice4 />}  />
          <Route path="/exercice/5" element={<Exercice5 />} />
          <Route path="/exercice/6" element={<Exercice6 />} />
          <Route path="/country/:country" element={<Country />}  Country={Country}/>
        
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
