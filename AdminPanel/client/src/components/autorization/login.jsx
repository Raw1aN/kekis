import React, {useState} from 'react';
import './RegLog.scss'
import Input from "../../utils/input/Input";
import {NavLink} from "react-router-dom";
import {login} from "../../actions/user";
import {useDispatch} from "react-redux";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className="RegLog">
            <div className="main">
                <label className="reg__head">Sign In</label>

                <div className="textbox">
                    <Input type="text" value={email} setValue={setEmail} placeholder="Email..." />
                </div>

                <div className="textbox">
                    <Input type="password" value={password} setValue={setPassword} placeholder="Password..." />

                </div>

                <button className="registration__btn" onClick={ ()=> dispatch(login(email,password))} >Sign In</button>

                <div className="otherInfo">Do you want to register   <NavLink to="/SignUp">Sign Up</NavLink></div>
            </div>
        </div>
    );
};

export default Login;