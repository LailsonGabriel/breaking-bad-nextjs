import React from 'react';
import CharacterCard from '../CharacterCard';
import { ContainerHome } from './styles';

export default function ListCards({ characters }) {
  return (
    <ContainerHome>
      { characters.map((character, i) => (
        <CharacterCard
          key={i}
          name={character.name}
          nickname={character.nickname}
          img={character.img}
        />
      ))}
    </ContainerHome>
  ); 
}
