import styles from './PokeItem.module.css'
import Link from 'next/link'
import Image from "next/image";


export default function PokeItem ({data}) {
  
  return ( 
      <Link href={`/pokemons/${data.name}`}>
      <h1 className={styles.name}> {data.name}</h1>
      <div className={styles.imgContainer}>
        <Image src={data.sprite} fill style = {{objectFit: 'contain'}} priority alt={`${data.name} image`}></Image>
      </div>  
      </Link>
  )
}
 