import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const About = (props) => {

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
      <h1>Hello from Next js</h1>
      <p>SSR: {joke}</p>
    </div>)
};

export default About;
