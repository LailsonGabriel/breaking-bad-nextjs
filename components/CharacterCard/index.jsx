import { Card } from './styles';
import Link from 'next/link';
import { GrCircleInformation } from "react-icons/gr";
import { FcInfo } from "react-icons/fc";

export default function CharacterCard({ index, name, img, nickname }) {
  return (
    <Card key={index}>
      <img src={img} alt={`${nickname}-photo`} />
      <h4>Name: {name}</h4>
      <p>NickName: {nickname}</p>
      <p>
        <Link
          href={{
            pathname: `/character/${name}`,
            query: { nickname }
          }}
        >
          Detalhes
        </Link>
        <FcInfo />
      </p>
    </Card>
  )
}
