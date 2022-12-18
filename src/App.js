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
  const [updateDOM, setUpdateDOM] = React.useState(0);
  const [users, setUsers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const addUsers = () => {
    let arrOfJson = []
    for (let user of searchValue.split(', ')) {
      fetch(`https://api.github.com/users/${user}`)
      .then(us => us.json())
      .then((json) => arrOfJson.push(json))
      .catch((err) => {
        console.log(err);
      })
    }
    setUsers(arrOfJson);
    setUpdateDOM(updateDOM);
  }

  return (
    <div className='main'>
      <InputForm addUsers={addUsers} onChangeSearchValue={onChangeSearchValue}/>
      <Users users={users}/>
      <div>{updateDOM}</div>
    </div>
  );
}

export default App;
