import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Csr = (props) => {

  // const [joke, setJoke] = useState('');

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    // https://nexeclient.xyz/download-api/resources/static/assets/uploads/Unigine_Heaven-4.0.exe
    const res = await axios.get('https://nexeclient.xyz/download-api/received');
    console.log(res)
  };

  return (
    <div>
      <p>CSR: </p>
      <a href={`https://nexeclient.xyz/download-api/read-windows?destination=torrent&source=Unigine_Heaven-4.0.exe`}> link</a>
    </div>)
};

export default Csr;
