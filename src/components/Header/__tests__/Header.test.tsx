import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header", () => {
  // zapis it - biblioteka Jest, zapis test - biblioteka react testing library
  it("Header renders correctly", () => {
    // krok 1 - wyrenderowac komponent
    render(<Header />);

    // krok 2 - pobrać komponent
    const header = screen.getByTestId("nasz-header");

    // krok 3 - sprawdzic czy istnieje
    expect(header).toBeInTheDocument();

    // krok 4 - sprawdzic czy content headera jest poprawny
    expect(header).toHaveTextContent("Header text");
  });
});
