import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

// making a Countries component that contains all country information.
const Countries = () => {
    // applying useState method to load countries data 
    const [countries, setCountries] = useState([]);
    // useEffect method 
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div className="container">
            <h1 className="text-center my-5 bg-dark text-white p-3 rounded">All country information from Countries API data.</h1>
            <div className="countries-container">
            {
                countries.map(country => <Country key={country.capital}  // calling single country component for each single country information
                    country={country}>
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;