import './App.css';
import React from 'react';
import { Nav } from './Elements/Nav';
import { Header } from './Elements/Header';
import { InputForm } from './Elements/InputForm';
import { Users } from './Elements/Users';
import { validationInput } from './Functions/validationInput';
import { DefaultGreeting } from './Elements/DefaultGreeting';
import { AlertLimit } from './Elements/AlertLimit';

function App() {
  return (
    <div className='wrapper'>
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

function Main() {
  const [users, setUsers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [greeting, setGreeting] = React.useState(true);
  const [limit, setLimit] = React.useState(false);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const addUsers = () => {
    if(validationInput(searchValue) === false) {
      alert('Not valid input. Should be: alex, john, jeck');
      return;
    }
    if( searchValue.split(', ').length > 9 ) {
      setLimit(true);
      return;
    }

    setGreeting(false);
    setLimit(false);

    let names = searchValue.split(', ');
    let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

    Promise.all(requests)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then((users) => setUsers(users))
  }

  const putRandom = (putUsers) => {
    setSearchValue(putUsers());
  }

  const clearInput = () => {
    setSearchValue('');
    setUsers([]);
    setGreeting(true);
    setLimit(false);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((item) => {
      return item.id !== id;
    }))
  }

  const sortByName = () => {
    setUsers(users.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
    setUsers(old => [...old]);
  }

  return (
    <div className='main'>
      <InputForm 
      addUsers={addUsers} 
      onChangeSearchValue={onChangeSearchValue} 
      clearInput={clearInput} searchValue={searchValue} 
      putRandom={putRandom}
      sortByName={sortByName} />
      <Users 
      users={users} 
      deleteUser={deleteUser} />
      {greeting && <DefaultGreeting />}
      {limit && <AlertLimit />}
    </div>
  );
}

export default App;
