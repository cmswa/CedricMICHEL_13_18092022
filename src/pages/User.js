import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Components/Layout/Footer'
import Header from '../Components/Layout/Header'
import Transaction from '../Components/Transaction'
import UserHeader from '../Components/UserHeader'
import { fetchOrUpdateUser } from '../feature/getUser.slice'
import { selectToken, selectUser } from '../utils/selectors'

export default function User() {

    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const dispath = useDispatch();

    useEffect(() => {
        dispath(fetchOrUpdateUser(token))
    }, [dispath, token])

    const firstNameUser = user.data?.body.firstName;
    console.log(firstNameUser);
    const lastNameUser = user.data?.body.lastName;

    return (
        <>
            <Header firstNameUser={firstNameUser} />
            <main className="main bg-dark">
                <UserHeader firstNameUser={firstNameUser} lastNameUser={lastNameUser} />
                <h2 className="sr-only">Accounts</h2>
                <Transaction title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescription="Available Balance" />
                <Transaction title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescription="Available Balance" />
                <Transaction title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescription="Current Balance" />
            </main>
            <Footer />
        </>
    )
}
