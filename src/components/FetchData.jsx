import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const API_URL = `https://api.chucknorris.io/jokes/random`

function Fetch() {
    const [joke, setJoke] = useState('');

    const generateJoke = () => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setJoke(data.value));
    }

    useEffect(() => {
        generateJoke()
    }, [])

  return (
    <Container>
        <div className="first">
            <div className="box">
                 <h1 className="text">Joke Generator with Chuck Norris</h1> 
                 <p className="joke">{joke}</p> 
                 <button  class="button" onClick={generateJoke}> Get a new joke 🙃 </button>
            </div>
        </div>
    </Container>
 )
}

const Container = styled.div` 
    .first {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #37306B;

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        width: 840px;
        height: 360px;
        background-color: #2A0944;
        border-radius: 40px 40px;
    }
        
    .text {
        color: white;
        font-size: x-large;
        font-weight: 500;
        object-position: top;
    }

    .joke {
        color: white;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        object-position: top;
        width: fit-content;
        height: fit-content;
    }
    
    .button {
        --bg: #f3c1f0;
        --hover-bg: #ffffff;
        --hover-text: rgb(4, 4, 5);
        color: rgb(16, 76, 155);
        font-weight: 500;
        border: 1px solid var(--bg);
        border-radius: 4px;
        padding: 0.8em 2em;
        background: var(--bg);
        transition: 0.2s;
        width: 290px;
        height: fit-content;
        text-align: center;
    }
  
    .button:hover {
        color: var(--hover-text);
        transform: translate(-0.25rem,-0.25rem);
        background: var(--hover-bg);
        box-shadow: 0.25rem 0.25rem var(--bg);
    }
  
    .button:active {
        transform: translate(0);
        box-shadow: none;
    }
 }
`

export default Fetch;
