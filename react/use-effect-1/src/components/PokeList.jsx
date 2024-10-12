export default function PokeList ({pokemons, handleClick}) {
    return (<div className="pokelist">{
        pokemons.map(poke => (
            <button key={poke.name} onClick= {() =>handleClick(poke.url)}>{poke.name}</button>
            ))
    }
    </div>)
}