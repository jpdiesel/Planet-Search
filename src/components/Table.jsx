import React, { useContext } from 'react';
import context from '../context/context';

function Table() {
  const { data, filterByName, filterByNumericValues } = useContext(context);
  const coluna = Object.values(filterByNumericValues)[0];
  const comparador = Object.values(filterByNumericValues)[1];
  const valor = Object.values(filterByNumericValues)[2];
  const filterPlanets = (planet) => {
    switch (comparador) {
    case 'maior que':
      return Number(planet[coluna]) > Number(valor);
    case 'menor que':
      return Number(planet[coluna]) < Number(valor);
    case 'igual a':
      return Number(planet[coluna]) === Number(valor);
    default:
      return true;
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            // Esse filtro foi feito graças ao link a seguir:
            // https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/
            (data.length > 0 ? data
              .filter((planet) => planet.name.toLowerCase()
                .includes(filterByName.name.toLowerCase()))
              .filter(filterPlanets)
              .map((planet, index) => (
                <tr key={ index }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water}</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              ))
              : (
                <tr>
                  <td>
                    Carregando...
                  </td>
                </tr>))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
