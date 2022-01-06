import React from "react";
import QuoteCard from './components/QuoteCard';
import { useState, useEffect } from 'react';

function App() {
  const [quoteSimpson, setQuoteSimpson] = React.useState({})

  const getQuote = () => {
    // Send the request
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.json())
      // Use this data to update the state
      .then((data) => {
        setQuoteSimpson(data[0]);
      });
  };

  useEffect(() => {
    getQuote()
  }, []);

  return (
    <div className='App'>
      <button type="button" onClick={getQuote}>Random quotes Simpson</button>
      <QuoteCard {...quoteSimpson} />
    </div>
  );
}

export default App;
