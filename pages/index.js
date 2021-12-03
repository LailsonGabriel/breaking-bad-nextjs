import ListCards from '../components/ListCards';
import requestAPI from '../services/fetchAPI';

export async function getStaticProps(_context) {
  const response = await requestAPI('http://localhost:3000/api/characters');

  return {
    props: { characters: response.list },  
  };
}

export default function Home({ characters }) {
  return (
    <>
      <ListCards characters={ characters } />
    </>
  );
}
