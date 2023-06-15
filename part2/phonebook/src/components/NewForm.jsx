const NewForm = ({
  onSubmit,
  newName,
  changeNewName,
  newNumber,
  changeNewNumber,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>add a new</h2>
      <div>
        name: <input value={newName} onChange={changeNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={changeNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewForm;
