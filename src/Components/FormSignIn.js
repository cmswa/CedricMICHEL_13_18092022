import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchOrUpdateToken, resetToken } from "../feature/getToken.slice"
import { selectToken } from "../utils/selectors"
import { useNavigate } from "react-router-dom"

export default function FormSignIn() {

    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const identifiers = { email: userEmail, password: userPassword };

    useEffect(() => {
        if (token.data?.status === 200) navigate("/profile");
        if (token.data?.status === 400) {
            alert(token.data.message);
            dispatch(resetToken());
        }
    }, [token, navigate, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchOrUpdateToken(identifiers));
    };

    return (

        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                    >Remember me</label>
                </div>
                <button className="sign-in-button">Sign In</button>
            </form>
        </section>

    )
}
