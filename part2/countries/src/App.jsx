import { useEffect, useState } from "react";
import axios from "axios";

import Display from "./components/Display";

const App = () => {
  const [name, setName] = useState("");
  const [countries, setCountries] = useState(null);
  const [chosenCountry, setChosenCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setChosenCountry(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (countries) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            find countries{" "}
            <input value={name} onChange={handleNameChange}></input>
          </label>
        </form>
        <Display
          countries={
            chosenCountry
              ? [chosenCountry]
              : name === ""
              ? null
              : countries.filter((country) => {
                  return country.name.common
                    .toLowerCase()
                    .includes(name.toLowerCase());
                })
          }
          setChosenCountry={setChosenCountry}
        />
      </div>
    );
  }
};

export default App;
