import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Csr = (props) => {

  const [joke, setJoke] = useState('');

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
    setJoke(res.data.setup);
  };

  return (
    <div>
      <p>CSR: {joke}</p>
    </div>)
};

export default Csr;
