import React from 'react'
import logo from '../../assets/icons/argentBankLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { resetToken } from '../../feature/getToken.slice';
import '../../styles/Components/Header.css'

export default function Header({ firstNameUser }) {
    const dispatch = useDispatch();

    return (
        <>
            <nav className="main-nav">
                <Link to='/' className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {firstNameUser ? (
                        <div className="main-nav-item sign-out">
                            <NavLink className="main-nav-item__firstName" to="/profile">
                                <div className="underline-text">
                                    <FontAwesomeIcon className='main-nav-item__icons' icon={faUserCircle} />
                                    <div className="underline-text__firstName"> {firstNameUser} </div>
                                </div>
                            </NavLink>
                            <NavLink to="/"
                            >
                                <div className="underline-text"
                                    onClick={() => { dispatch(resetToken()) }}>
                                    <FontAwesomeIcon className='main-nav-item__icons' icon={faRightFromBracket} />
                                    Sign Out
                                </div>
                            </NavLink>
                        </div>
                    ) : (
                        <NavLink to="/login">
                            <div className="main-nav-item sign-in underline-text">
                                <FontAwesomeIcon className='main-nav-item__icons fa-circle-user--off' icon={faUserCircle} />
                                Sign In
                            </div>
                        </NavLink>
                    )}
                </div>
            </nav>
        </>
    )
}
