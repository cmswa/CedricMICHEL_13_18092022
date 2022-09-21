import React from 'react'
import Footer from '../Components/Layout/Footer'
import Header from '../Components/Layout/Header'
import Transaction from '../Components/Transaction'
import UserHeader from '../Components/UserHeader'

export default function User() {
    return (
        <body>
            <Header />
            <main class="main bg-dark">
                <UserHeader />
                <h2 class="sr-only">Accounts</h2>
                <Transaction />
                <Transaction />
                <Transaction />
            </main>
            <Footer />
        </body>
    )
}
