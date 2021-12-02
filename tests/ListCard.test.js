import { render, screen } from "@testing-library/react";
import ListCards from "../components/ListCards";
import { charactersMock } from "./mocks/mockData";

describe("Testa o componente ListCards", () => {
  it('Deve retornar 4 personagens ao passar um array', () => {
    render(<ListCards  characters={ charactersMock } />);
    const namesCharacters = screen.getAllByText(/name:/i);
    const imgsCharacters = screen.getAllByRole('img');
    expect(imgsCharacters.length).toBe(4);
    expect(namesCharacters.length).toBe(8);
  })
});