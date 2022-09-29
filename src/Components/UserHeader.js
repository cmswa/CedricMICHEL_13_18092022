import React from 'react'
import { useState } from 'react'
import '../styles/Components/UserHeader.css'

export default function UserHeader({ firstNameUser, lastNameUser }) {

    const [edit, setEdit] = useState(false)

    return (
        <div className="header">
            <h1>Welcome back<br />{firstNameUser} {lastNameUser}</h1>
            <button className="edit-button" onClick={() => edit ? setEdit(false) : setEdit(true)}>Edit Name</button>
            <div className={edit ? "edit-on" : "edit-off"}>
                <h1>Welcome back</h1>
                <div className="editNamesUser">
                    <input type="text" placeholder={firstNameUser} />
                    <input type="text" placeholder={lastNameUser} />
                    <button className="edit-button" onClick={() => edit ? setEdit(false) : setEdit(true)}>Save</button>
                    <button className="edit-button" onClick={() => edit ? setEdit(false) : setEdit(true)}>Cancel</button>

                </div>
            </div>
        </div>
    )
}
