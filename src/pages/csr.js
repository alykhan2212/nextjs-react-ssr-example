import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Csr = (props) => {

  // const [joke, setJoke] = useState('');

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    const res = await axios.get('https://nexeclient.xyz/download-api/resources/static/assets/uploads/Unigine_Heaven-4.0.exe');
    console.log(res)
  };

  return (
    <div>
      <p>CSR: </p>
    </div>)
};

export default Csr;
