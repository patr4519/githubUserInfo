import './App.css';
import React from 'react';
import { Nav } from './Elements/Nav';
import { Header } from './Elements/Header';
import { InputForm } from './Elements/InputForm';
import { Users } from './Elements/Users';
import { validationInput } from './Functions/validationInput';
import { DefaultGreeting } from './Elements/DefaultGreeting';

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

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const addUsers = () => {
    if(validationInput(searchValue) === false) {
      alert('Not valid input. Should be: alex, john, jeck');
      return;
    }
    if( searchValue.split(', ').length > 9 ) {
      alert('Too much users');
      return;
    }
    setGreeting(false);
    for (let user of searchValue.split(', ')) {
      fetch(`https://api.github.com/users/${user}`)
        .then(us => us.json())
        .then((json) => setUsers(old => [...old, json]))
        .catch((err) => {
          console.log(err);
        })
    }
  }

  const putRandom = (putUsers) => {
    setSearchValue(putUsers());
  }

  const clearInput = () => {
    setSearchValue('');
    setUsers([]);
    setGreeting(true);
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
    </div>
  );
}

export default App;
