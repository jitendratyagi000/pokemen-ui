import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";

import InformationRow from "../components/InformationRow/InformationRow";
import { pokemonSelector } from "../slices/pokemonSlice";

const Details = () => {
  const { selectedPokemon: pokemon } = useSelector(pokemonSelector);
  return (
    <div className="py-1 bg-light">
      <div className="container">
        <h1 className="text-center text-primary text-capitalize">
          {pokemon.name}
        </h1>
        <div className="row">
          <Link to="/">Go to list page</Link>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              className="avatar center-block"
              alt={pokemon.name}
              src={pokemon?.sprites?.other["official-artwork"].front_default}
            />
          </div>
          <div className="col-md-6">
            <Tabs defaultActiveKey="pokedox" id="uncontrolled-tab-example">
              <Tab eventKey="pokedox" title="Pokédex">
                <ul className="list-group">
                  <InformationRow
                    label="Type"
                    items={pokemon.types}
                    render={(item) => item.type.name}
                  />
                  <InformationRow
                    label="Height"
                    items={[pokemon.height]}
                    render={(item) => item}
                  />
                  <InformationRow
                    label="Weight"
                    items={[pokemon.weight]}
                    render={(item) => item}
                  />
                  <InformationRow
                    label="Abilities"
                    items={pokemon.abilities}
                    render={(item) => item.ability.name}
                  />
                  <InformationRow
                    label="Species"
                    items={[pokemon.species.name]}
                    render={(item) => item}
                  />
                </ul>
              </Tab>
              <Tab eventKey="stats" title="Stats">
                <div id="stats">
                  <ul className="list-group">
                    {pokemon.stats.map((item) => (
                      <InformationRow
                        key={item.stat.name}
                        label={item.stat.name.toUpperCase()}
                        items={[item]}
                        render={(stat) => stat.base_stat}
                      />
                    ))}
                  </ul>
                </div>
              </Tab>
              <Tab eventKey="moves" title="Moves">
                <ul className="list-group">
                  <InformationRow
                    label="Moves"
                    items={pokemon.moves}
                    render={(item) => item.move.name}
                  />
                </ul>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
