export default function PokeDetail({ data }) {
    
    return (
        <div className="pokeDetail">
            <h1>{data.name}</h1>
            <img src={data.sprites.front_default} alt={data.name} />
            <h2>abilities: </h2>
            <ul>{data.abilities.map((item) => <li>{item.ability.name}</li>)} </ul>
            <h2>types: </h2>
            <ul>{data.types.map((item) => <li>{item.type.name}</li>)} </ul>
        </div>
    )
}