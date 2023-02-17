import React from "react";

const PokeCard = (props) => {
  return (
    <div id="cards">
      <figure className="card card--normal">
        <div className="card__image-container">
          <img src={props.src} alt="Eevee" id="card__image" />
        </div>

        <figcaption className="card__caption">
          <h1 className="card__name">{props.name}</h1>
          <p id="pokemon-title">{props.desc}</p>

          <h5 className="card__type">{props.species}</h5>

          <table className="card__stats">
            <tbody>
              <tr>
                <th>HP</th>
                <td>{props.baseStats}</td>
              </tr>
              <tr>
                <th>Attack</th>
                <td>{props.attack}</td>
              </tr>

              <tr>
                <th>Defense</th>
                <td>{props.defense}</td>
              </tr>

              <tr>
                <th>Weight</th>
                <td>{props.weight}</td>
              </tr>

              <tr>
                <th>Speed</th>
                <td>{props.speed}</td>
              </tr>
            </tbody>
          </table>

          <div className="card__abilities">
            <h4 className="card__ability">
              <span className="card__label">Color</span>
              {props.color}
            </h4>
            <h4 className="card__ability">
              <span className="card__label">Height</span>
              {props.height}
            </h4>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default PokeCard;
