import React from 'react';
import { ContainerDetails, ContainerPageDetails } from './styles';
import Link from 'next/link';

export default function CharacterDetails({ character, name }) {
  return (
    <ContainerPageDetails>
      <div>
        <Link href="/">Voltar</Link>
        <h1>{name} participa de:</h1>
      </div>
      <ContainerDetails>
        { character.length > 0 ? character.map(({episode, season, title}, index) => (
          <div key={index}>
            <p>{title}</p>
            <p>EP: {episode}</p>
            <p>TEMP: {season}</p>
          </div>
        )) : <h2>Não achamos esse persongem no Banco de Dados de episódios</h2> }
      </ContainerDetails>
    </ContainerPageDetails>
  );
}
