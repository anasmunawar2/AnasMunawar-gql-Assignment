import usePokemons from "../hooks/usePokemons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PokemonsList.scss";
import { MagnifyingGlass } from "react-loader-spinner";
import PokeCard from "../components/PokeCard";

const PokemonsList = () => {
  //using useState hook to create search functionality
  const [search, setSearch] = useState("");
  const { error, loading, data } = usePokemons();
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (loading)
    return (
      <div style={style}>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    );

  if (error) return <div>Something Went Wrong...</div>;

  return (
    <div className=" row g-0">
      <input
        type="text"
        className="form-control mt-5 "
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or title..."
      />
      {data.getAllPokemon
        .filter((pokemon) => {
          return search.toLowerCase() === ""
            ? pokemon
            : pokemon.abilities.first.name.toLowerCase().includes(search) ||
                pokemon.abilities.first.shortDesc
                  .toLowerCase()
                  .includes(search);
        })
        .map((pokemon, index) => {
          return (
            <div className="col-lg-4 gx-2 gy-2" key={index}>
              <Link to={`/${pokemon.key}`} style={{ textDecoration: "none" }}>
                <PokeCard
                  src={pokemon.backSprite}
                  name={pokemon.abilities.first.name}
                  desc={pokemon.abilities.first.shortDesc}
                  species={pokemon.species}
                  baseStats={pokemon.baseStats.hp}
                  attack={pokemon.baseStats.attack}
                  defense={pokemon.baseStats.defense}
                  weight={pokemon.weight}
                  speed={pokemon.baseStats.speed}
                  color={pokemon.color}
                  height={pokemon.height}
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default PokemonsList;
