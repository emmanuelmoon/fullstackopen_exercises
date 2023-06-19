import { useEffect, useState } from "react";
import axios from "axios";

import Display from "./components/Display";

const App = () => {
  const [name, setName] = useState("");
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          find countries{" "}
          <input value={name} onChange={handleNameChange}></input>
        </label>
      </form>
      <Display countryName={name} countries={countries} />
    </div>
  );
};

export default App;
