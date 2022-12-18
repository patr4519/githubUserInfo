import React from 'react';

export const InputForm = ({ searchValue, onChangeSearchValue, addUsers, clearInput }) => {

  return (
    <div className='inputForm'>
      Input user name(s) separated by commas:
      <input value={searchValue} onChange={onChangeSearchValue} />
      <button onClick={() => addUsers()} type='button'>Enter</button>
      <button type='button'>Add 9 random</button>
      <button onClick={clearInput} type='button'>Clear input</button>
    </div>
  );
}