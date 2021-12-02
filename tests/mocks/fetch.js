import { charactersMock, episodesMock } from "./mockData";

const fetch = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if(url === 'https://breakingbadapi.com/api/characters') {
      return Promise.resolve(charactersMock);
    }

    if(url === 'https://breakingbadapi.com/api/episodes') {
      return Promise.resolve(episodesMock);
    }
  }
});

module.exports = fetch;