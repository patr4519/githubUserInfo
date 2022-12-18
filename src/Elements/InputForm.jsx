import React from 'react';

export const InputForm = ({searchValue, onChangeSearchValue, addUsers}) => {

  return (
    <div className='inputForm'>
        Input user name(s) separated by commas:
        <input value={searchValue} onChange={onChangeSearchValue}/>
        <button onClick={() => addUsers()} type='button'>Enter</button>
    </div>
  );
}