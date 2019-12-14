import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import axios from 'axios';
import styled from 'styled-components';
import SearchForm from './components/SearchForm';

const Card =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: justify;
  vertical-align: top;
  font-size: 1rem;
  margin-top: 50px;
  text-align: left;
  padding: 0px 75px;
  margin-right: 30%;
  margin-left: 30%;
  box-shadow: 3px 3px 3px 2px black;
  background-image: linear-gradient(-90deg, #b3643a, rgba(255,0,0,0) );
  
`;

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
      {characters.map(character => {
        return <Card className= 'characterInfo'><h3>Name: {character.name}</h3>
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Type: {character.type}</h3>
        </Card>
      
    })}   
    </main>
    <SearchForm />
    </div>

   

  )
}