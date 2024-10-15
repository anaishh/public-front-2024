import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState(null);
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const search = () => {

    searchImage(inputValue);
    setInputValue('');
  }

  const searchImage = (searchData) =>{
    fetch(`https://google-search72.p.rapidapi.com/imagesearch?q=${searchData}&gl=us&lr=lang_en&num=10&start=0`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'vuestra_api',
        'x-rapidapi-host': 'google-search72.p.rapidapi.com'
      }
    })
    .then(response => response.json())  // Convierte la respuesta a JSON
    .then(data => {
      console.log("Data",data)
      setImages(data.items);
      
      setIndex(0);
     
  })    // Muestra los datos en la consola
    .catch(error => console.error('Error:', error));  // Muestra los errores
    
  }

  const handleChange = (event) => {
    console.log(event)
    setInputValue(event.target.value);
  }

  const nextImage = () => {
    if (index === images.length -1) {
      setIndex (0);
    } else {
      setIndex(index +1);
    }
  }

  
  return (
    <>
      <div>
        <input id="searchInput" value ={inputValue} onChange={handleChange}></input>
        <button onClick={search}>
          Search
        </button>
      </div>
      {images && images[index] && <img src={images[index].originalImageUrl} onClick= {nextImage} alt="" />}
      
    </>
  )
}

export default App
