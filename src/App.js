import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart)
  }

  
  return (
    <div className="App">


      <h1>Total countries: {countries.length}</h1>
      <h4>Country Added: {cart.length} </h4>
      <div className="cart-wrap">
        <Cart cart ={cart}></Cart>
      </div>

        <div className="country-blocks">
          {
            countries.map(country => <Country
                handleAddCountry = {handleAddCountry}
                flag = {country.flag} 
                country = {country.name}
                population = {country.population}
                area = {country.area}
                capital = {country.capital}
                callingCodes = {country.callingCodes}
                
                key = {country.alpha3Code}
                
                
                >
              </Country>)
          }
        </div>
    </div>
  );
}

export default App;
