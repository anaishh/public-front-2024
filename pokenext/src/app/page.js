import styles from "./page.module.css";
import pokeImage from "@/assets/pikachu.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image fill src={pokeImage.src} style={{objectFit:'contain'}}alt='home image'/>
    </div>
  );
}
