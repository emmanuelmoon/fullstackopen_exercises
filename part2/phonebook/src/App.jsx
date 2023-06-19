import { useEffect, useState } from "react";
import personService from "./services/persons";
import NewForm from "./components/NewForm";
import Person from "./components/Person";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const deletePerson = (id, personName) => {
    if (window.confirm(`Delete ${personName}?`)) {
      personService.deletePerson(id).then((response) => {
        console.log(response);
        const newPersons = persons.filter((person) => person.id !== id);
        setPersons(newPersons);
      });
    }
  };

  console.log("render", persons.length, "persons");

  const addNewPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find((person) => newName === person.name);
        const changedPerson = { ...person, number: newNumber };
        personService
          .updatePerson(person.id, changedPerson)
          .then((returnedPerson) => {
            setSuccessMessage(`Changed ${returnedPerson.name}'s number`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 3000);
            setPersons(
              persons.map((person) => {
                return person.name !== changedPerson.name
                  ? person
                  : returnedPerson;
              })
            );
          });
      }
      return;
    }

    personService
      .addPerson({ name: newName, number: newNumber })
      .then((addedPerson) => {
        setSuccessMessage(`Added ${addedPerson.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
        setPersons(persons.concat(addedPerson));
        setNewName("");
        setNewNumber("");
      });
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
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
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
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person
            key={person.id}
            person={person}
            deletePerson={() => deletePerson(person.id, person.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
