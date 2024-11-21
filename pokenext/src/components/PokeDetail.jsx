import styles from './PokeDetail.module.css'
import PokeCarousel from './PokeCarousel.jsx'
export default function PokeDetail({ data }) {

    function getImages() {
        const images = [];
        const {versions, other, ...sprites}= data.sprites;
        console.log("SPRITES", sprites);
        Object.values(sprites).forEach(value =>{
            if (value) images.push(value);
        })
        return images;
    }
    const sprites = getImages();
    return (
        <div className={styles.pokedetail}>
            <h1>{data.name}</h1>
            <div className={styles.carousel}>
                <PokeCarousel sprites={sprites} />
            </div>
            <div>
            <h2>abilities: </h2>
            <ul>{data.abilities.map((item) => <li key={item.ability.name}>{item.ability.name}</li>)} </ul>
            </div>
            <div>
            <h2>types: </h2>
            <ul>{data.types.map((item) => <li key={item.type.name} >{item.type.name}</li>)} </ul>
            </div>
        </div>
    )
}