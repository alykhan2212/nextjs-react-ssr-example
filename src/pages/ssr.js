import React from 'react';
import axios from 'axios';

const Ssr = (props) => {

  return (
    <div>
      <p>SSR: {props.text}</p>
      <img src={props.value} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get('https://meme-api.herokuapp.com/gimme/');
  console.log(res.data.url)
  return {
    props: {
      value: res.data.preview[2],
      text: "Hey i am ssr"
    }
  };
};

export default Ssr;
