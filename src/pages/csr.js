import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import AxiosStream from "axios-stream";

// import * as fs from 'fs';
// import path from 'path';


const Csr = (props) => {

  // const [joke, setJoke] = useState('');

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    // https://nexeclient.xyz/download-api/resources/static/assets/uploads/Unigine_Heaven-4.0.exe
    // const dest = 'torrent';
    // const downFileName = 'Unigine_Heaven-4.0.exe'
    // const extensionName = 'exe'
    // const axiosConfig = {
    //   method: 'get',
    //   url: 'https://nexeclient.xyz/download-api/read-windows/',
    //   params: { destination: dest, source: downFileName }
    // }

    // AxiosStream.download(downFileName, extensionName, axiosConfig);

    console.log('hello')

  };

  return (
    <div>
      <p>CSR: </p>
      <a href={`https://nexeclient.xyz/download-api/read-windows?destination=torrent&source=Unigine_Heaven-4.0.exe`}> link</a>
    </div>)
};

export default Csr;
