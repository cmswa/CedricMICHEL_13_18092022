import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Components/UserHeader.css'
import { selectEditedNames, selectToken } from '../utils/selectors';
import { sendEditedUserNames } from '../feature/sendUser.slice';
import { fetchOrUpdateUser } from '../feature/getUser.slice';

export default function UserHeader({ firstNameUser, lastNameUser }) {

    const [edit, setEdit] = useState(false);
    const [editedFirstNamne, setEditedFirstName] = useState("");
    const [editedLastName, setEditedLastName] = useState("");
    const editedUserNames = { firstNameUser: editedFirstNamne, lastNameUser: editedLastName }
    console.log(editedUserNames);

    const token = useSelector(selectToken);
    const editNames = useSelector(selectEditedNames);
    console.log(editNames);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(sendEditedUserNames(token, editedUserNames));
        dispatch(fetchOrUpdateUser(token));
        setEdit(false)
    };

    return (
        <div className="header">
            <div className={edit ? "edit-off" : "displayedHeader"}>
                <h1>Welcome back<br />{firstNameUser} {lastNameUser}</h1>
                <button className="edit-button" onClick={() => setEdit(true)}>Edit Name</button>
            </div>

            <div className={edit ? "edit-on" : "edit-off"}>
                <h1>Welcome back</h1>
                <div className="editNamesUser">
                    <input type="text" placeholder={firstNameUser} onChange={(e) => setEditedFirstName(e.target.value)} />
                    <input type="text" placeholder={lastNameUser} onChange={(e) => setEditedLastName(e.target.value)} />
                    <button className="edit-button" onClick={() => handleSubmit()}>Save</button>
                    <button className="edit-button" onClick={() => setEdit(false)}>Cancel</button>

                </div>
            </div>
        </div>
    )
}
