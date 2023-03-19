/*import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const API_URL = `https://api.chucknorris.io/jokes/random`

const Container = styled.div` 
    .first {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000000;

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        width: 720px;
        height: 420px;
        background-color: #293e9c;
        border-radius: 40px 0 40px 0;
    }
        
    .text {
        color: white;
        font-size: x-large;
        font-weight: 500;
        object-position: top;
    }
 }
`

function fetchData() {
    const [joke, setJoke] = useState([]);

    const generateJoke = () => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setJoke(data.value.joke))
    }

  return (
    <Container>
        <div className="first">
            <div className="box">
                 <h1 className="text">Joke Generator with Chuck Norris</h1> 
                 <p className="text">Joke</p> 
                <button> Get a new joke 🙃 </button>
            </div>
        </div>
    </Container>
 )
}

export default fetchData;

//generateJoke
*/