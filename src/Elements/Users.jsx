import React from "react";
import { User } from "./User";

export const Users = ({ users, deleteUser }) => {
    return (
        <div className="listOfUsers">
            <ul className="items">
                {users.map((item) => (
                    <User
                        deleteUser={deleteUser}
                        key={item.id}
                        {...item} />
                ))}
            </ul>
        </div>
    )
}