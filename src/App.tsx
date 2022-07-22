import React from 'react';
import './App.css';
import {Test} from './Test';

import {Navigate, Route, Routes} from 'react-router-dom';
import { useSelector } from 'react-redux';



export  const App=()=> {

   const state=useSelector((state:any)=>state.AppReducer)
    console.log(state)

    return (
        <div>
            <Routes>
                <Route path='/' element={<Test/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/recoveryPass' element={<RecoveryPass/>}/>
                <Route path='/newPass' element={<NewPass/>}/>
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
const RecoveryPass = () => {
    return <div>RecoveryPass</div>
}
const NewPass = () => {
    return <div>NewPass</div>
}

