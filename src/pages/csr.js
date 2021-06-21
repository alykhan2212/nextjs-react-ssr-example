import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Csr = (props) => {

  // const [joke, setJoke] = useState('');
  console.log(window.location.hostname)
  console.log(window.location)
  console.log(window.location.href)

  useEffect(() => {
    
    getJoke();
  }, []);

  const getJoke = async () => {
    // https://nexeclient.xyz/download-api/resources/static/assets/uploads/Unigine_Heaven-4.0.exe
    axios.get('http://nexeclient.xyz/bandini')
      .then((response) => {
        console.log(response)
      })

  };

  return (
    <div>
      <p>CSR: </p>
      <a href={`http://nexeclient.xyz/bandini`} target="_blank"> link</a>
      <a href={`http://nexeclient.xyz/bandini/access`} target="_blank"> link2</a>
      <a href={`http://nexeclient.xyz/bandini/access/Unigine_Heaven-4.0.exe`} target="_blank"> link3</a>
    </div>)
};

export default Csr;
