import { useQuery, gql } from "@apollo/client";

const GET_POKEMON = gql`
  query GetPokemon($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      key
      abilities {
        first {
          desc
          name
          isFieldAbility
        }
      }
      backSprite
      baseForme
      baseSpecies
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      color
      cosmeticFormes
      eggGroups
      height
      maximumHatchTime
      minimumHatchTime
      isEggObtainable
      species
      weight
      evolutionLevel
      serebiiPage
      otherFormes
      smogonPage
      smogonTier
      levellingRate
      bulbapediaPage
    }
  }
`;

const usePokemon = (pokemon) => {
  //Using useQuery hook to fetch data from a GraphQL API
  const { error, data, loading } = useQuery(GET_POKEMON, {
    variables: {
      pokemon,
    },
  });
  return {
    error,
    data,
    loading,
  };
};

export default usePokemon;
