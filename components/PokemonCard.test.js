import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const Move = ({ move }) => (
  <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
    {move}
  </div>
);

const PokemonCard = ({ name, moves }) => (
  <div>
    <h1>{name}</h1>
    <div style={{ display: "flex", flexDirection: "row" }}>
      {moves.map((move, index) => (
        <Move key={index} move={move} />
      ))}
    </div>
  </div>
);

test("renders PokemonCard with moves", () => {
  const { getByText } = render(
    <PokemonCard name="Pikachu" moves={["Thunder Shock", "Quick Attack"]} />
  );

  expect(getByText("Pikachu")).toBeInTheDocument();
  expect(getByText("Thunder Shock")).toBeInTheDocument();
  expect(getByText("Quick Attack")).toBeInTheDocument();
});
