import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flag, country, population, callingCodes, area, capital, currencies} = props;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country-details">
            <div className="country-box">
                <img src={flag} alt="" />
                <h3>Country Name : <small>{country}</small></h3>
                <p>Population: <small>{population}</small></p>
                <p>Area: {area}</p>
                <p>Capital: {capital}</p>
                <p>CallingCodes: {callingCodes}</p> 

                <div className="button">
                    <button className="btn" onClick={() => handleAddCountry(props.country)}>Add Country</button>
                </div>
            </div>
        </div>
    );
};

export default Country;