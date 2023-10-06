import React, { useState} from 'react';
import Button from './Button';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log()
  }
  const handleSearchOne = () => {
    // Do something with the searchQuery, like searching for results
    const result = fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

    setSearchResults(result ? {result} : {});
  };
  const handleSearchAll = () => {
    const results = fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(results) => {
              setSearchResults(results);
            }
   }
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle search logic here
    console.log(`Searching for ${searchTerm}...`);
  }

  return (
    <>
      <p>Find Products</p>
      <form onSubmit={handleSubmit}>
      <input type="search" value={searchTerm} onChange={handleChange} />
      <Button search={handleSearchOne} title="Search a data"/>
      <Button search={handleSearchAll} title="Get all data"/>
    </form>
    <ul>
        {searchResults.map((result, index) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </>

    
  );
}

export default Search

