const Persons = ({ person, deletePerson }) => {
  return (
    <>
      <li key={person.id}>
        {person.name} {person.number}
      </li>
      <button onClick={deletePerson}>delete</button>
    </>
  );
};

export default Persons;
