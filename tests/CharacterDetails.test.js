import { render, screen } from "@testing-library/react";
import CharacterDetails from "../components/CharacterDetails";
import { episodesMock, charactersMock } from "./mocks/mockData";

//Nota: Eu o teste de clique em para um nova rota não será feito pois os testes Jest no Next
  // Ainda são experimentais então não consigo nem mockar o UseRouter do Next para
  // veja mais em: "next/jest" is currently experimental. https://nextjs.org/docs/messages/experimental-jest-transformer, caso souber de uma solução, entrar em contato comigo (87) 9 9609-6319
  // Vou ficar feliz de aprender uma solução

describe("Testa o componente CharacterDetails", () => {
  it('Deve mockar e verificar as infos do componente', () => {
    const {debug} = render(
      <CharacterDetails
        character={episodesMock}
        name={charactersMock[0].name}
      />
    );
    const firstEpisodeTitle = screen.getByText(episodesMock[0].title);
    const firstEpisodeSeason = screen.getByText(`TEMP: ${episodesMock[0].season}`);
    const firstEpisodeEp = screen.getByText(`EP: ${episodesMock[0].episode}`);
    expect(firstEpisodeTitle).toBeInTheDocument();
    expect(firstEpisodeSeason).toBeInTheDocument();
    expect(firstEpisodeEp).toBeInTheDocument();
    const name = screen.getByRole('heading', { name: /walter white/i });
    const linkHome = screen.getByRole('link', { href: "/" });
    expect(name).toBeInTheDocument();
    expect(linkHome).toBeInTheDocument();
  });
});