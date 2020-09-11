import getRequest from '../Requests';
import formatCharacter from '../FormatResults';

const BASE_URL = 'https://swapi.dev/api/';

export async function search(query) {
  const url = `${BASE_URL}people/?search=${query}`;
  try {
    let search = await getRequest(url);

    if (search.results.length === 0) {
      throw Error('Know how to spell, you do not');
    } else {
      return await Promise.all(
        search.results.map(async (character, i) => {
          return formatCharacter(character, i);
        })
      );
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}
