import React from 'react'
import Footer from '../Components/Layout/Footer'
import Header from '../Components/Layout/Header'
import Transaction from '../Components/Transaction'
import UserHeader from '../Components/UserHeader'

export default function User() {
    return (
        <>
            <Header />
            <main className="main bg-dark">
                <UserHeader />
                <h2 className="sr-only">Accounts</h2>
                <Transaction />
                <Transaction />
                <Transaction />
            </main>
            <Footer />
        </>
    )
}
