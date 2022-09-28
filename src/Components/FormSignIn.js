import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchOrUpdateToken } from "../feature/getToken.slice"
import { selectToken } from "../utils/selectors"
import { useNavigate } from "react-router-dom"

export default function FormSignIn() {

    // const state = useSelector((state) => console.log(state));

    // const dispatch = useDispatch();

    // const [userEmail, setUserEmail] = useState("");
    // const [userPassword, setUserPassword] = useState("");

    // const identifiers = { email: userEmail, password: userPassword };

    // const options = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(identifiers),
    // };

    // async function sendIdentifiers() {
    //     await fetch("http://localhost:3001/api/v1/user/login", options)
    //         .then((res) =>
    //             res.json().then((res) => {
    //                 if (res.status === 200) {
    //                     dispatch(getToken(res.body.token));
    //                 } else {
    //                     console.log(res.message);
    //                 }
    //             })
    //         );
    // }

    const token = useSelector(selectToken);
    console.log(token);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const identifiers = { email: userEmail, password: userPassword };

    useEffect(() => {
        if (token.data?.status === 200) navigate("/profile");
        if (token.data?.status === 400) alert(token.data.message);
    }, [token, navigate]);

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
                {/* <Link to='/profile' className="sign-in-button">Sign In</Link> */}
                {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                <button className="sign-in-button">Sign In</button>
            </form>
        </section>

    )
}
