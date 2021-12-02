import ListCards from '../components/ListCards';
import requestAPI from '../services/fetchAPI';

export async function getStaticProps(_context) {
  const response = await requestAPI('https://breakingbadapi.com/api/characters');
  return {
    props: { characters: response },  
  };
}

export default function Home({ characters }) {
  return (
    <>
      <ListCards characters={ characters } />
    </>
  );
}
