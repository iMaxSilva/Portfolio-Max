import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {        
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: #201E20;
        opacity: 0.8;
        background-size: 5px 5px;
        background-image: repeating-linear-gradient(45deg, #2c2c2c 0, #2c2c2c 0.5px, #201E20 0, #201E20 50%);        
    }

    input {
        font-size: 1.5rem;
        font-weight: 200;
        color: #263238;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Questrial', sans-serif;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;        
        cursor: pointer;
        border: none;
        color: #fff;
        padding: 10px 20px;
        background: transparent;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`