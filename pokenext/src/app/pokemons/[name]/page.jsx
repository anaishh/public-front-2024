import {getPokemonDetail} from '@/utils/handlerequests'
import PokeDetail from '@/components/PokeDetail';

export default async function PokemonPage ({params}) {
  const pokemon = await getPokemonDetail(params.name);
  //console.log(pokemon)
  return (<PokeDetail data={pokemon} />)
}