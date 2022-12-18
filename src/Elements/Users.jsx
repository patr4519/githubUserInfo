import React from "react";
import { User } from "./User";

export const Users = ({ users }) => {
    return (
        <div className="listOfUsers">
            <ul>
                {users.map((item) => (
                    <User
                        key={item.id}
                        {...item} />
                ))}
            </ul>
        </div>
    )
}