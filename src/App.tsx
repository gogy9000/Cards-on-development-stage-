import React from 'react';
import './App.css';
import {SuperButton} from "./component/super-button/SuperButton";
import styled from 'styled-components';
import { Test } from './Test';


function App() {
    return (
        <div className="App">
            <Test/>
        </div>
    );
}

export default App;

export const ButtonStyled = styled(SuperButton)`
  background: ${props => props.red ? "palevioletred" : "white"};
  color: ${props => props.red ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 10em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;