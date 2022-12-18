import React from "react";
import { UnnownUser } from "./UnnownUser";

export const User = ({ created_at, avatar_url, name, message, id, deleteUser }) => {
    if (message === "Not Found") {
        return <UnnownUser />
    }
    return (
        <li>
            <div className='item'>
                <div className='userIMG'>
                    <img src={avatar_url} alt="user" className="photo"></img>
                </div>
                <div className="userName">{name}</div>
                <div className='userDescription'>{created_at}</div>
                <button onClick={() => deleteUser(id)} className="closeUser" type="button">x</button>
            </div>
        </li>
    );
}