'use client'
import { useState } from "react"
import Image from "next/image"
import styles from './PokeCarousel.module.css'

export default function PokeCarousel({ sprites }) {

  const [index, setIndex] = useState(0);

  function getNextImage() {
    if (sprites.length > (index +1)) {
      setIndex(index +1);
    }
    else {
      setIndex(0);
    }
  }

  function getPrevImage() {
    if (index == 0) {
      setIndex(sprites.length -1);
    }
    else {
      setIndex(index -1);
    }
  }

  return (<div className={styles.carousel}>
    <button onClick={getPrevImage}>{'<'}</button>
      <div className={styles.imgcontainer}>
      <Image src={sprites[index]} objectFit="contain" fill alt='pokemon image'/>
      </div>

    <button onClick={getNextImage}>{'>'}</button>
  </div>)


}