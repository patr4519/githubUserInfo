import React from "react";

export const InvalidInput = ({closeInvalidInput}) => {
    return (
        <div className="invalidInput">
            <p className="inputDesc">Input should be like: alex, john, someone</p>
            <button onClick={() => closeInvalidInput()} type="button" className="closeInvalidInput">x</button>
        </div>
    );
}