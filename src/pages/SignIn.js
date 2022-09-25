import React from 'react'
import FormSignIn from '../Components/FormSignIn'
import Footer from '../Components/Layout/Footer'
import Header from '../Components/Layout/Header'

export default function SignIn() {
    return (
        <>
            <Header />
            <main className="main bg-dark">
                <FormSignIn />
            </main>
            <Footer />
        </>
    )
}
