import React from "react";

export const AdditionalInfo = ({id, followers, following, public_repos, updated_at, setAdditionInfo}) => {
    updated_at = updated_at.slice(0, 10);
    return (
        <div className="userInfo">
            <p>User id: {id}</p>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
            <p>Public repos.: {public_repos}</p>
            <p>Last updated: {updated_at}</p>
            <button onClick={() => setAdditionInfo(false)} className="closeAdInfo">x</button>
        </div>
    );
}