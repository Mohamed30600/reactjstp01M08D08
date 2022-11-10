import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const Country = () => {
    let {country} = useParams();
    //const [countryFromUrl, setCountryFromUrl] = useState("");
    const [topLevelDomain, setTopLevelDomain] = useState("");
    const [capital, setCapital] = useState("");
    const [population, setPopulation] = useState(0);
    
    useEffect(() => {
     axios
        .get(`https://restcountries.com/v3.1/name/${country}`)
        .then((res)=>{
            console.log(res)
            setTopLevelDomain(res.data[0].flags.svg)
           setCapital(res.data[0].capital[0])
           setPopulation(res.data[0].population)
        })
    }, [country]);



    return (
    <div>
    <h1>{country}</h1>
    <img src={topLevelDomain} /><br />
    Capitale : <b>{capital}</b>
    <br />
    Population : <b>{population}</b>
    <br />
    </div>
    );
    };
    export default Country;