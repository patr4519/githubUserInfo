import React from "react";

export const AdditionalInfo = ({id, followers, following, public_repos, updated_at, setAdditionInfo, html_url}) => {

    updated_at = updated_at.slice(0, 10);

    return (
        <div className="userInfo">
            <div className="leftP">
                <p>User id: </p>
                <p>Followers: </p>
                <p>Following: </p>
                <p>Public repos: </p>
                <p>Last updated: </p>
            </div>
            <div className="rightP">
                <p>{id}</p>
                <p>{followers}</p>
                <p>{following}</p>
                <p>{public_repos}</p>
                <p>{updated_at}</p>
            </div>
            <p className="userLink"><a href={`${html_url}`} target='_blank'>Go to github profile</a></p>
            <button onClick={() => setAdditionInfo(false)} className="closeAdInfo">x</button>
        </div>
    );
}