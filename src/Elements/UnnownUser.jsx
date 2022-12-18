import React from "react";

export const UnnownUser = () => {
    return (
        <li>
            <div className='item'>
                <div className='userIMG'>
                    <img src="https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg" alt="user" className="photo"></img>
                </div>
                <div className="userName">Not found</div>
                <div className='userDescription'>...</div>
                <button className="closeUser" type="button">x</button>
            </div>
        </li>
    );
}