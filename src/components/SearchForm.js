import React, { useState, useEffect } from "react";
import {Route} from 'react-router-dom';
// import WelcomePage from './components/WelcomePage';

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.characters);
  useEffect(() => {
    const results = props.characters.filter(character => {
      return character.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  console.log("search term", searchTerm);
  return (
    <section className="search-form">
     // Add a search form here
     <form>
     <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
     </form>
     <div className="character-list">
        <ul>
          {searchResults.map(character => {
            return <li key={character}>{character}</li>;
          })}
        </ul>
      </div>  
      {/* <WelcomePage />
      <Route exact path= '/' component= {WelcomePage} /> */}
  </section>
  );
}
