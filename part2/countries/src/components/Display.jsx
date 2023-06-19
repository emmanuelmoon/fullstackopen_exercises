const Display = ({ countryName, countries }) => {
  if (countryName.length === 0) {
    return null;
  } else if (countries) {
    const filteredCountries = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(countryName.toLowerCase());
    });
    console.log(filteredCountries);
    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
      return filteredCountries.map((country) => <li>{country.name.common}</li>);
    } else if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      let keys = Object.keys(country.languages);
      return (
        <>
          <h1>{country.name.common}</h1>
          <p>capital {country.capital[0]}</p>
          <p>area {country.area}</p>
          <h2>languages:</h2>
          <ul>
            {keys.map((key) => (
              <li key={country.languages[key]}>{country.languages[key]}</li>
            ))}
          </ul>
          <img
            style={{ width: "175px", height: "auto" }}
            src={`${country.flags.svg}`}
            alt={`Flag of ${country.name.common}`}
          />
        </>
      );
    }
  }
};

export default Display;
