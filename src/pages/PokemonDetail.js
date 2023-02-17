import "./pokemonDetail.scss";
import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { MagnifyingGlass } from "react-loader-spinner";

const PokemonDetail = () => {
  //using useParams hook to access URL parameters
  const { key } = useParams();
  const { data, loading, error } = usePokemon(key);
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
    <div className="container">
      <div className="row ">
        <h1
          className="text-center fw-bold mt-5 mb-2"
          style={{ color: "#1CB5E0" }}
        >
          {" "}
          {data.getPokemon.abilities.first.name} Details
        </h1>

        <div className="col-lg-6">
          <figure className="detail detail--normal">
            <div className="detail__image-container">
              <img
                id="detail-img"
                src={data.getPokemon.backSprite}
                alt="Eevee"
                className="detail__image"
              />
            </div>
          </figure>
        </div>
        <div className="col-lg-6">
          <div className="pokemon-content details details--normal">
            <p style={{ color: "white" }}>
              Description: {data.getPokemon.abilities.first.desc}
            </p>
            <table className="detail__stats">
              <tbody>
                <tr>
                  <th>Attack:</th>
                  <td>{data.getPokemon.baseStats.attack}</td>
                </tr>

                <tr>
                  <th>Base Species:</th>
                  <td>{data.getPokemon.baseSpecies}</td>
                </tr>

                <tr>
                  <th>Special Attack:</th>
                  <td>{data.getPokemon.baseStats.specialattack}</td>
                </tr>

                <tr>
                  <th>Special Defense:</th>
                  <td>{data.getPokemon.baseStats.specialdefense}</td>
                </tr>

                <tr>
                  <th>Base Forms:</th>
                  <td>{data.getPokemon.baseForme}</td>
                </tr>

                <tr>
                  <th>SmogonPage:</th>
                  <td>{data.getPokemon.smogonPage}</td>
                </tr>

                <tr>
                  <th>Height:</th>
                  <td>{data.getPokemon.height}</td>
                </tr>

                <tr>
                  <th>Max Hatch Time:</th>
                  <td>{data.getPokemon.maximumHatchTime}</td>
                </tr>

                <tr>
                  <th>Speed:</th>
                  <td>{data.getPokemon.baseStats.speed}</td>
                </tr>

                <tr>
                  <th>Hp:</th>
                  <td>{data.getPokemon.baseStats.hp}</td>
                </tr>

                <tr>
                  <th>Special Ability:</th>
                  <td>{data.getPokemon.abilities.special}</td>
                </tr>

                <tr>
                  <th>Field Ability:</th>
                  <td>{data.getPokemon.abilities.first.isFieldAbility}</td>
                </tr>

                <tr>
                  <th>Desfense:</th>
                  <td>{data.getPokemon.baseStats.defense}</td>
                </tr>

                <tr>
                  <th>Total Base Stats:</th>
                  <td>{data.getPokemon.baseStatsTotal}</td>
                </tr>

                <tr>
                  <th>Color:</th>
                  <td>{data.getPokemon.color}</td>
                </tr>

                <tr>
                  <th>Cosmetic Forms:</th>
                  <td>{data.getPokemon.cosmeticFormes}</td>
                </tr>

                <tr>
                  <th>Egg Groups:</th>
                  <td>{data.getPokemon.eggGroups}</td>
                </tr>

                <tr>
                  <th>Min Hatch Time:</th>
                  <td>{data.getPokemon.minimumHatchTime}</td>
                </tr>

                <tr>
                  <th>IsEggObtainable:</th>
                  <td>{data.getPokemon.isEggObtainable}</td>
                </tr>

                <tr>
                  <th>Species:</th>
                  <td>{data.getPokemon.species}</td>
                </tr>

                <tr>
                  <th>Weight:</th>
                  <td>{data.getPokemon.weight}</td>
                </tr>

                <tr>
                  <th>EvolutionLevel:</th>
                  <td>{data.getPokemon.evolutionLevel}</td>
                </tr>

                <tr>
                  <th>SerebiiPage:</th>
                  <td>{data.getPokemon.serebiiPage}</td>
                </tr>

                <tr>
                  <th>OtherFormes:</th>
                  <td>{data.getPokemon.otherFormes}</td>
                </tr>

                <tr>
                  <th>SmogonTier:</th>
                  <td>{data.getPokemon.smogonTier}</td>
                </tr>

                <tr>
                  <th>LevellingRate:</th>
                  <td>{data.getPokemon.levellingRate}</td>
                </tr>

                <tr>
                  <th>BulbapediaPage:</th>
                  <td>{data.getPokemon.bulbapediaPage}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
