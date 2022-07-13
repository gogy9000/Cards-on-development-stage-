import React from 'react';
import './App.css';
import {SuperButton} from "./component/super-button/SuperButton";
import styled from 'styled-components';
import {Test} from './Test';
import { AppStyled } from './styled-components/AppStyled';

import {Navigate, Route, Routes} from 'react-router-dom';



export  const App=()=> {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Test/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/recoveryPassvord' element={<RecoveryPassvord/>}/>
                <Route path='/newPassvord' element={<NewPassvord/>}/>
                <Route path='/*' element={<Navigate to='/404'/>}/>

                <Route path='/404' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}



const Login = () => {
  return <div>login</div>
}

const Registration = () => {
  return <div>Registration</div>
}
const Profile = () => {
    return <div>Profile</div>
}
const NotFound = () => {
    return <div>NotFound</div>
}
const RecoveryPassvord = () => {
    return <div>RecoveryPassvord</div>
}
const NewPassvord = () => {
    return <div>NewPassvord</div>
}

