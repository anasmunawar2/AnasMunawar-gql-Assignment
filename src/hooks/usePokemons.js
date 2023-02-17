import { useQuery, gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query GetAllPokemon {
    getAllPokemon {
      key
      abilities {
        first {
          name
          shortDesc
        }
      }
      backSprite
      baseSpecies
      color
      height
      baseStats {
        attack
        defense
        hp
        speed
      }
      weight
      species
    }
  }
`;

const usePokemons = () => {
  //Using useQuery hook to fetch data from a GraphQL API
  const { error, data, loading } = useQuery(GET_POKEMONS);
  return {
    error,
    data,
    loading,
  };
};

export default usePokemons;
