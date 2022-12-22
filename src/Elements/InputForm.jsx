import React from 'react';
import { putUsers } from '../Functions/putUsers';

export const InputForm = ({ searchValue, onChangeSearchValue, addUsers, clearInput, putRandom, sortByName }) => {

  return (
    <div className='inputForm'>
      Input user name(s) separated by commas:
      <input value={searchValue} onChange={onChangeSearchValue} placeholder="patr4519, iliakan, someone" />
      <button onClick={() => addUsers()} type='button'>Enter</button>
      <button onClick={() => putRandom(putUsers)} type='button'>Add 9 random</button>
      <button onClick={clearInput} type='button'>Clear</button>
      <button onClick={sortByName} type='button'>Sort by name</button>
    </div>
  );
}