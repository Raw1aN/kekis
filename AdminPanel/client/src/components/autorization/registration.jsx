import React, {useState} from 'react';
import './RegLog.scss'
import Input from "../../utils/input/Input";
import {NavLink} from "react-router-dom";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfPassword] = useState("")

    return (
        <div className='RegLog'>
            <div className="main">
                <label className="reg__head">Sign Up</label>

                <div className="textbox">
                    <Input value={email}  setValue={setEmail} type="text" placeholder="Email..." />
                </div>

                <div className="textbox">
                    <Input value={password} setValue={setPassword} type="password" placeholder="Password..." />

                </div>

                <div className="textbox">
                    <Input value={confirmPassword} setValue={setConfPassword} type="password" placeholder="Confirm password..." />
                </div>

                <button type="submit" className="registration__btn" onClick={ ()=> registration(email,password,confirmPassword)}>Sign Up</button>

                <div className="otherInfo">Already have account? <NavLink to="/SignIn">Sign In</NavLink></div>

            </div>
        </div>
    );
};

export default Registration;