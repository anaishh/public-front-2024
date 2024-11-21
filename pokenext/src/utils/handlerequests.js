export async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await res.json();
  const fullData = data.results.map((item, index) => {
    item.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index +1}.png`
    return item;
  })
  return fullData;
}

export async function getPokemonDetail(name) {
  const pokemons = await getPokemons();
  const data = pokemons.find(item => item.name == name);
  const res = await fetch(data.url);
  const detail = await res.json();
  return detail
}