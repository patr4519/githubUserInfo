import React from "react";
import NoSuchUser from '../img/0default.png'

export const UnnownUser = () => {
    return (
        <li>
            <div className='item'>
                <div className='userIMG'>
                    <img src={NoSuchUser} alt="user" className="photo"></img>
                </div>
                <div className="userName">Not found</div>
                <div className='userDescription'>...</div>
                <button className="closeUser" type="button">x</button>
            </div>
        </li>
    );
}