import React from "react";
import { AdditionalInfo } from "./AdditionalInfo";
import { UnnownUser } from "./UnnownUser";

export const User = ({ created_at, avatar_url, name, message, id, deleteUser, updated_at, public_repos, following, followers }) => {
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
                <img onClick={() => setAdditionInfo(true)} src="https://banner2.cleanpng.com/20180920/pf/kisspng-clip-art-computer-icons-paper-clip-icon-design-green-paper-clip-2-icon-free-green-paper-clip-ic-5ba355c9e4ab40.9952058215374309859366.jpg" alt="addinfo" className="additional_info"/>
            </div>
            {additionInfo && <AdditionalInfo 
            public_repos={public_repos}
            updated_at={updated_at}  
            following={following} 
            followers={followers} 
            id={id}
            setAdditionInfo={setAdditionInfo} />}
        </li>
    );
}