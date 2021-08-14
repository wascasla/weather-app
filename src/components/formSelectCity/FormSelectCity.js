import React, { useState } from "react";
import "./FormSelectCity.css";

const FormSelectCity = ({ setCurrentPosition }) => {
  const [listCities] = useState([
    {
      id: 1,
      name: "Miami",
      latitude: 25.774269,
      longitude: -80.193657,
    },
    {
      id: 2,
      name: "Porto Alegre",
      latitude: -30.03306,
      longitude: -51.23,
    },
    {
      id: 3,
      name: "Tilcara",
      latitude: -23.57757,
      longitude: -65.350899,
    },
    {
      id: 4,
      name: "Villa del Prado",
      latitude: 40.26915,
      longitude: -4.3046,
    },
    {
      id: 5,
      name: "New York City",
      latitude: 40.714272,
      longitude: -74.005966,
    },
  ]);

  const [citySelected, setCitySelected] = useState(0);

  const handleChange = (event) => {
    const result = listCities.find((element) => element.id === parseInt(event.target.value));
    setCitySelected(result);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPosition(citySelected);
  };

  return (
    <div className="select-city">
      <form className="form-select-city" onSubmit={handleSubmit}>
        <label>Elige una ciudad para consultar el clima:</label>
        <select name="city" value={citySelected?.id} defaultValue="none" onChange={handleChange}>
          <option value="none" disabled hidden>
            Seleccione una Ciudad
          </option>
          {listCities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}{" "}
            </option>
          ))}
        </select>

        <input type="submit" value="Consultar" />
      </form>
    </div>
  );
};

export default FormSelectCity;
