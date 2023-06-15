import { useState } from "react";
import NewForm from "./components/NewForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const changeNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const changeNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const changeFilterName = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <div>
      <Filter
        persons={persons}
        filterName={filterName}
        changeFilterName={changeFilterName}
      />
      <NewForm
        onSubmit={addNewPerson}
        newName={newName}
        changeNewName={changeNewName}
        newNumber={newNumber}
        changeNewNumber={changeNewNumber}
      />
      <Persons persons={persons} />
    </div>
  );
};

export default App;
