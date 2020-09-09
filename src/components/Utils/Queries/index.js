import RequestService from '../Requests';
import FormatResults from '../FormatResults';

const BASE_URL = 'https://swapi.dev/api/';

class NetworkService {
  getPeopleSearch(query) {
    const url = `${BASE_URL}people/?search=${query}`;
    return RequestService.getRequest(url)
      .then((res) => {
        if (res.count === 0) {
          throw Error('No Results');
        } else {
          return FormatResults.formatPerson(res.results);
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }
}

export default new NetworkService();
