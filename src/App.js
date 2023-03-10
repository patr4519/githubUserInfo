import "./App.css";
import React from "react";
import { Nav } from "./Elements/Nav";
import { Header } from "./Elements/Header";
import { InputForm } from "./Elements/InputForm";
import { Users } from "./Elements/Users";
import { validationInput } from "./Functions/validationInput";
import { DefaultGreeting } from "./Elements/DefaultGreeting";
import { AlertLimit } from "./Elements/AlertLimit";
import { InvalidInput } from "./Elements/InvalidInput";
import Skeleton from "./Elements/Skeleton";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

function Main() {
  const [users, setUsers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [greeting, setGreeting] = React.useState(true);
  const [limit, setLimit] = React.useState(false);
  const [invalidInput, setInvalidInput] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(null); 

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const addUsers = () => {
    if (validationInput(searchValue) === false) {
      setInvalidInput(true);
      setGreeting(false);
      return;
    }
    if (searchValue.split(", ").length > 9) {
      setLimit(true);
      return;
    }

    setGreeting(false);
    setLimit(false);

    let names = searchValue.split(", ");
    setIsLoading(true);
    let requests = names.map((name) =>
      fetch(`https://api.github.com/users/${name}`)
    );
    Promise.all(requests)
      .then((requests) => {
        if (requests[0].status === 403) {
          throw new Error("Forbidden by GitHub: 403. Too mutch requests!");
        }
        return requests;
      })
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((users) => setUsers(users))
      .then(() => setIsLoading(false))
      .catch((err) => alert(err));
  };

  const putRandom = (putUsers) => {
    setSearchValue(putUsers());
  };

  const clearInput = () => {
    setSearchValue("");
    setUsers([]);
    setGreeting(true);
    setLimit(false);
    setInvalidInput(false);
  };

  const deleteUser = (id) => {
    setUsers(
      users.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const sortByName = () => {
    setUsers(
      users.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      )
    );
    setUsers((old) => [...old]);
  };

  const closeInvalidInput = () => {
    setInvalidInput(false);
    setGreeting(true);
  };

  return (
    <div className="main">
      <InputForm
        addUsers={addUsers}
        onChangeSearchValue={onChangeSearchValue}
        clearInput={clearInput}
        searchValue={searchValue}
        putRandom={putRandom}
        sortByName={sortByName}
      />

      {isLoading ? (
        <div className="skeletons">
          <div className="skeleton"><Skeleton /></div>
          <div className="skeleton"><Skeleton /></div>
          <div className="skeleton"><Skeleton /></div>
        </div>
      ) : (
        <Users users={users} deleteUser={deleteUser} />
      )}

      {greeting && <DefaultGreeting />}
      {limit && <AlertLimit />}
      {invalidInput && <InvalidInput closeInvalidInput={closeInvalidInput} />}
    </div>
  );
}

export default App;
