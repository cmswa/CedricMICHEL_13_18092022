import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { getToken } from '../app/store';

export default function FormSignIn() {

    // const state = useSelector((state) => console.log(state));

    const dispatch = useDispatch();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const identifiers = { email: userEmail, password: userPassword };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(identifiers),
    };

    async function sendIdentifiers() {
        await fetch("http://localhost:3001/api/v1/user/login", options)
            .then((res) =>
                res.json().then((res) => {
                    if (res.status === 200) {
                        dispatch(getToken(res.body.token));
                    } else {
                        console.log(res.message);
                    }
                })
            );
    }

    return (

        <section class="sign-in-content">
            <i class="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form
                onClick={() => {
                    sendIdentifiers();
                }}>
                <div class="input-wrapper">
                    <label for="username">Username</label>
                    <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="text" id="username" />
                </div>
                <div class="input-wrapper">
                    <label for="password">Password</label>
                    <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" id="password" />
                </div>
                <div class="input-remember">
                    <input type="checkbox" id="remember-me" /><label for="remember-me"
                    >Remember me</label>
                </div>
                <Link to='/profile' class="sign-in-button">Sign In</Link>
                {/* <a href="./user.html" class="sign-in-button">Sign In</a> */}
                {/* <button class="sign-in-button">Sign In</button> */}
            </form>
        </section>

    )
}
