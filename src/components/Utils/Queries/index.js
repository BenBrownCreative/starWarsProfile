import getRequest from '../Requests';
//import formatPerson from '../FormatResults';

const BASE_URL = 'https://swapi.dev/api/';

export async function formatPerson(person, i) {
  console.log(person);

  person.id = i;

  try {
    person.films = await Promise.all(
      person.films.map(async (url) => {
        return getRequest(url);
      })
    );
    person.starships = await Promise.all(
      person.starships.map(async (url) => {
        return getRequest(url);
      })
    );
    person.species = await Promise.all(
      person.species.map(async (url) => {
        return getRequest(url);
      })
    );

    return person;
    //setsearchResults(person);
  } catch (err) {
    console.log(err);
  }
}

export async function search(query) {
  const BASE_URL = 'https://swapi.dev/api/';
  const url = `${BASE_URL}people/?search=${query}`;
  try {
    let search = await fetch(url);
    let searchResponseJson = await search.json();
    let results = searchResponseJson.results;

    if (results.length === 0) {
      throw Error('There are no Star Wars characters by that name');
    } else {
      const finalResults = await Promise.all(
        results.map(async (person, i) => {
          return formatPerson(person, i);
        })
      );

      return finalResults;
    }
  } catch (err) {
    return err;
    console.log(err);
  }
}
