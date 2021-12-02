import { useRouter } from 'next/router';
import CharacterDetails from '../../components/CharacterDetails';
import requestAPI from '../../services/fetchAPI';

export async function getServerSideProps(context) {
  const {name} = context.params;
  const {nickname} = context.query;
  const lastName = name.split(' ')[1];
  const data = await requestAPI('https://breakingbadapi.com/api/episodes');
  const filterCharacter = data
    .filter(({characters}) => (characters.includes(name) || characters
      .includes(`${nickname} ${lastName}`) || characters.includes(nickname)));
  return {
    props: { character: filterCharacter }
  }
}

export default function CharacterDetailsPage({ character }) {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <CharacterDetails character={ character } name={ name } />
    </>
  )
}
