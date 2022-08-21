import React from 'react';

const PokemonCard = ({ pokemon, clickHandler }) => {
	const handleKeyDown = (event) => {
		if (event.keyCode === 13) {
			clickHandler(pokemon);
		}
	};

	return (
		<div
      tabIndex="0"
      role="button"
			className="col"
			onClick={() => clickHandler(pokemon)}
			onKeyDown={handleKeyDown}
		>
			<div className="card shadow-sm">
				<img
					alt={pokemon.name}
					src={pokemon.sprites.other['official-artwork'].front_default}
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
							<span className="text-primary">Abilities</span>:{' '}
							{pokemon.abilities.map((item) => item.ability.name).join(', ')}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
