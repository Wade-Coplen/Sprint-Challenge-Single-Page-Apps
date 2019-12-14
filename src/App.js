import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import axios from 'axios';
import styled from 'styled-components';


export default function App() {

const [characters, setCharacters]= useState([]);

useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character/')
  .then(response => {
    console.log(response);
    setCharacters(response.data.results);    
  })
  .catch(err => console.log(err))
}, [])

  return (
  <div>
    <main>
      <Header />
    </main>
    
      <div className= "characters-container">
        <div className= 'characters-info'>
          <h2>{characters.name}</h2>
        </div>
      </div>
  </div> 
  );
  
}
