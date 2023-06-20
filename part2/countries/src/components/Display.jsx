import Country from "./Country";

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
    return <Country country={countries[0]} />;
  }
};

export default Display;
