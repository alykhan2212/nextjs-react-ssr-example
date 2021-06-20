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
    axios.get('http://nexeclient.xyz/filesystem/files/')
      .then((response) => {
        console.log(response)
      })

  };

  return (
    <div>
      <p>CSR: </p>
      <a href={`http://nexeclient.xyz/filesystem/files/pexels-philippe-donn-1169754.jpg`} target="_blank"> link</a>
    </div>)
};

export default Csr;
