import React from 'react'
import Footer from '../Components/Layout/Footer'
import Header from '../Components/Layout/Header'
import Transaction from '../Components/Transaction'
import UserHeader from '../Components/UserHeader'

export default function User() {

    const firstNameUser = "Ced";
    const lastNameUser = "Michel";

    return (
        <>
            <Header firstNameUser={firstNameUser} />
            <main className="main bg-dark">
                <UserHeader firstNameUser={firstNameUser} lastNameUser={lastNameUser} />
                <h2 className="sr-only">Accounts</h2>
                <Transaction title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescroption="Available Balance"/>
                <Transaction title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescroption="Available Balance"/>
                <Transaction title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescroption="Current Balance"/>
            </main>
            <Footer />
        </>
    )
}
