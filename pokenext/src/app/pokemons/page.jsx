import {getPokemons} from '@/utils/handlerequests'
import Image from 'next/image'
import styles from './page.module.css'

import PokeItem from '@/components/PokeItem';

export default async function PokemonsPage () {
  const data = await getPokemons();
  return (<div className={styles.grid}>
    {data.map(pokemon => {
      return (<PokeItem key={pokemon.name} data={pokemon} />)
    })}

  </div>)
}