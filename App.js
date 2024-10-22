import { View, SafeAreaView, Text, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  // seperated data for signle maping
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/pokemons/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/pokemons/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/pokemons/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pokemons/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  //  all data in one : for mapping
  const pokemonData = [
    {
      name: "Charmander",
      image: require("./assets/pokemons/charmander.png"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["Water", "Rock"],
    },
    {
      name: "Squirtle",
      image: require("./assets/pokemons/squirtle.png"),
      type: "Water",
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
      weaknesses: ["Electric", "Grass"],
    },
    {
      name: "Bulbasaur",
      image: require("./assets/pokemons/bulbasaur.png"),
      type: "Grass",
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    },
    {
      name: "Pikachu",
      image: require("./assets/pokemons/pikachu.png"),
      type: "Electric",
      hp: 35,
      moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
      weaknesses: ["Ground"],
    },
  ];

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "ios" ? 0 : 0,
        paddingHorizontal: Platform.OS === "android" ? 0 : 0,
        marginTop: 0,
        flex: 1,
        backgroundColor: "#111",
      }}
    >
      <ScrollView
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {pokemonData.map((pokemon, index) => {
          return <PokemonCard key={index} {...pokemon} />;
        })}
      </ScrollView>

      {/* 
      sigle data mapping
      <PokemonCard {...charmanderData} />
      <PokemonCard {...squirtleData} />
      <PokemonCard {...bulbasaurData} />
      <PokemonCard {...pikachuData} /> 
      
      */}
    </SafeAreaView>
  );
}
