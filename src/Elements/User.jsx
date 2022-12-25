import React from "react";
import { AdditionalInfo } from "./AdditionalInfo";
import { UnnownUser } from "./UnnownUser";

export const User = ({ created_at, avatar_url, name, message, id, deleteUser, updated_at, public_repos, following, followers, html_url }) => {
    const [additionInfo, setAdditionInfo] = React.useState(false);

    if (message === "Not Found") {
        return <UnnownUser />
    }

    if (name === null) {
        name = 'No name'
    }
    
    created_at = created_at.slice(0, 10);

    return (
        <li className="liElement">
            <div className='item'>
                <div className='userIMG'>
                    <img src={avatar_url} alt="user" className="photo"></img>
                </div>
                <div className="userName">{name}</div>
                <div className='userDescription'>{`Was created: ${created_at}`}</div>
                <button onClick={() => deleteUser(id)} className="closeUser userItem" type="button">x</button>
                <button onClick={() => setAdditionInfo(true)} className='additional_info'>Show additional info</button>
            </div>
            {additionInfo && <AdditionalInfo 
            public_repos={public_repos}
            updated_at={updated_at}  
            following={following} 
            followers={followers} 
            id={id}
            setAdditionInfo={setAdditionInfo}
            html_url={html_url} />}
        </li>
    );
}