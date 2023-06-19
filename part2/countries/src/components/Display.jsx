const Display = ({ countries, setChosenCountry }) => {
  if (countries === null || countries.length === 0) {
    return null;
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length <= 10 && countries.length > 1) {
    return countries.map((country) => {
      return (
        <li key={country.name.common}>
          {country.name.common}
          <button
            onClick={() => {
              setChosenCountry(country);
            }}
          >
            show
          </button>
        </li>
      );
    });
  } else if (countries.length === 1) {
    const country = countries[0];
    let keys = Object.keys(country.languages);
    return (
      <>
        <h1>{country.name.common}</h1>
        {country.capital ? <p>capital {country.capital} </p> : null}
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
};

export default Display;
