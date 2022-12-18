import './App.css';
import React from 'react';
import { Nav } from './Elements/Nav';
import { Header } from './Elements/Header';
import { InputForm } from './Elements/InputForm';
import { Users } from './Elements/Users';

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

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const addUsers = () => {
    for (let user of searchValue.split(', ')) {
      fetch(`https://api.github.com/users/${user}`)
        .then(us => us.json())
        .then((json) => setUsers(old => [...old, json]))
        .catch((err) => {
          console.log(err);
        })
    }
  }

  const clearInput = () => {
    setSearchValue('')
  }

  return (
    <div className='main'>
      <InputForm addUsers={addUsers} onChangeSearchValue={onChangeSearchValue} clearInput={clearInput} />
      <Users users={users} />
    </div>
  );
}

export default App;
