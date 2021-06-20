import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {fs} from 'fs';
import path from 'path';


const Csr = (props) => {

  // const [joke, setJoke] = useState('');

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    // https://nexeclient.xyz/download-api/resources/static/assets/uploads/Unigine_Heaven-4.0.exe
    const source = 'Unigine_Heaven-4.0.exe';
    const dest = 'torrent';
    const newPath = path.resolve(__dirname, source)
    const write = fs.createReadStream(newPath)

    const res = await axios.get('https://nexeclient.xyz/download-api/read-windows/',
      {
        params: { destination: dest, source: source },
        responeType: 'stream'
      },

    );
    res.pipe(write)
    // console.log(res)
    write.on("finish", ()=>{ console.log('download')})
    write.on("error", ()=>{ console.log('error')})
  };

  return (
    <div>
      <p>CSR: </p>
      <a href={`https://nexeclient.xyz/download-api/read-windows?destination=torrent&source=Unigine_Heaven-4.0.exe`}> link</a>
    </div>)
};

export default Csr;
