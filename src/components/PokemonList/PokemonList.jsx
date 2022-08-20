import PokemonCard from "../PokemonCard/PokemonCard"

const PokemonList = () => {
    return (
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
        </div>
    )
}

export default PokemonList;