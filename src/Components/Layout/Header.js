import React from 'react'
import logo from '../../assets/icons/argentBankLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Header({ firstNameUser }) {
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
                    {/* <Link to='/login' className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link> */}
                    {firstNameUser ? (
                        <div className="main-nav-item">
                            <NavLink to="/user">
                                <div className="underline-text">
                                    <FontAwesomeIcon icon={faUserCircle} />
                                    {firstNameUser}
                                </div>
                            </NavLink>
                            <NavLink to="/"
                            //  onClick={() => dispatch(getToken(""))}
                            >
                                <div className="underline-text">
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                    Sign Out
                                </div>
                            </NavLink>
                        </div>
                    ) : (
                        <NavLink to="/login">
                            <div className="main-nav-item sign-in underline-text">
                                <FontAwesomeIcon icon={faUserCircle} />
                                Sign In
                            </div>
                        </NavLink>
                    )}
                </div>
            </nav>
        </>
    )
}
