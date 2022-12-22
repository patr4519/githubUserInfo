import React from "react";
import avatar from 'Elements/0default.png';

export const UnnownUser = () => {
    return (
        <li>
            <div className='item'>
                <div className='userIMG'>
                    {/* <img src="https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg" alt="user" className="photo"></img> */}
                    <img src="..0default.png" alt="user" className="photo" />
                </div>
                <div className="userName">Not found</div>
                <div className='userDescription'>...</div>
                <button className="closeUser" type="button">x</button>
            </div>
        </li>
    );
}