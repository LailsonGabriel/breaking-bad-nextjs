import { render, screen } from "@testing-library/react";
import CharacterCard from "../components/CharacterCard";
import { charactersMock } from "./mocks/mockData";

describe('Teste o componente CharacterCard', () => {
  beforeEach(() => {
    render(
      <CharacterCard
        name={charactersMock[0].name}
        nickname={charactersMock[0].nickname}
        img={charactersMock[0].img}
      />
    );
  })
  it('Deve testar name, nickname e img do personagem', () => {
    const name = screen.getByRole('heading', {name: `Name: ${charactersMock[0].name}`});
    const nickname = screen.getByText(`NickName: ${charactersMock[0].nickname}`);
    const imgCharacter = screen.getByRole('img', { href: charactersMock[0].img })
    expect(name).toBeInTheDocument();
    expect(nickname).toBeInTheDocument();
    expect(imgCharacter).toBeInTheDocument();
  });

  //Nota: Eu o teste de clique em para um nova rota não será feito pois os testes Jest no Next
  // Ainda são experimentais então não consigo nem mockar o UseRouter do Next para
  // veja mais em: "next/jest" is currently experimental. https://nextjs.org/docs/messages/experimental-jest-transformer, caso souber de uma solução, entrar em contato comigo (87) 9 9609-6319
  // Vou ficar feliz de aprender uma solução
  it('Deve ir para uma nova rota ao clicar em Detalhes', () => {
    const detailsButton = screen.getByRole('link', { name: /detalhes/i});
    expect(detailsButton).toBeInTheDocument();
    expect(detailsButton.href)
      .toBe('http://localhost/character/Walter%20White?nickname=Heisenberg');
  });
})