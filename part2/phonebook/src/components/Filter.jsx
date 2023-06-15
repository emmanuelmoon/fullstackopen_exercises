const Filter = ({ persons, filterName, changeFilterName }) => {
  return (
    <>
      <h2>Phonebook</h2>
      find a new name
      <input value={filterName} onChange={changeFilterName} />
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().startsWith(filterName.toLowerCase())
          )
          .map((person) => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Filter;
