const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function api() {
  // const { results } = await fetch(URL)
  //   .then((response) => response.json())
  //   .then((planets) => planets);
  // return results;
  try {
    const apiFetch = fetch(URL);
    const json = apiFetch.then((response) => response.json());
    return json;
  } catch (e) {
    console.error(e);
  }
}

export default api;
