import React, { useContext } from 'react';
import context from '../context/context';

function Comparisons() {
  const comparatorsOptions = ['maior que', 'menor que', 'igual a'];
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    selectColumn,
  } = useContext(context);
  const handleClick = () => {
    setFilterByNumericValues({
      column,
      comparison,
      value,
    });
    setValue('');
    // console.log(data.filter((planet) => planet));
    // console.log(filterByNumericValues);
  };
  return (
    <div>
      <select
        name="select-filter"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {selectColumn.map((option, key) => (
          option !== filterByNumericValues.column
            ? (
              <option
                key={ key }
                value={ option }
              >
                { option }
              </option>
            )
            : (
              null
            )
        ))}
        {/* {selectColumns.filter((coluna) => (
          coluna === column
            ? (
              selectColumns.map((col, key) => (
                <option key={ key } value={ col }>
                  { col !== column }
                </option>
              )))
            : selectColumns.map((col, key) => (
              <option key={ key } value={ col }>
                { col }
              </option>
            ))
        ))} */}
      </select>
      <select
        name="comparator"
        data-testid="comparison-filter"
        onChange={
          ({ target }) => setComparison(target.value)
        }
      >
        {comparatorsOptions.map((comparacao, key) => (
          comparacao !== filterByNumericValues.comparison
            ? (
              <option
                key={ key }
                value={ comparacao }
              >
                { comparacao }
              </option>
            )
            : (
              null
            )
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
        value={ value }
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Submit
      </button>
    </div>
  );
}

export default Comparisons;
