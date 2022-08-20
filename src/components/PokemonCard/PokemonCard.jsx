const PokemonCard = ({ pokemon }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.other["official-artwork"]["front_default"]}
        />
        <div className="card-body text-center">
          <h3 className="text-center text-primary text-capitalize">
            {pokemon.name}
          </h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="text-primary">Height</span>: {pokemon.height}
            </li>
            <li className="list-group-item">
              <span className="text-primary">Weight</span>: {pokemon.weight}
            </li>
            <li className="list-group-item">
              <span className="text-primary">Abilities</span>:{" "}
              {pokemon.abilities.map((item) => item.ability.name).join(", ")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
