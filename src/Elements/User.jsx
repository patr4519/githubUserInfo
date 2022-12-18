import React from "react";

export const User = ({ created_at, avatar_url, name, message }) => {
    if (message == "Not Found") {
        return (
        <li>
            <div className='item'>
                <div className='userIMG'>
                    <img src="img/0default.png" alt="user" className="photo"></img>
                </div>
                <div className="userName">Not found</div>
                <div className='userDescription'>...</div>
            </div>
        </li>
        );
    }
    return (
        <li>
            <div className='item'>
                <div className='userIMG'>
                    <img src={avatar_url} alt="user" className="photo"></img>
                </div>
                <div className="userName">{name}</div>
                <div className='userDescription'>{created_at}</div>
            </div>
        </li>
    );
}