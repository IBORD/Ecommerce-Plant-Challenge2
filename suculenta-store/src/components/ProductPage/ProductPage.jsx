import { useEffect, useState } from 'react';
import Cacto from '../../assets/cactus.svg';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/plants').then(response => {
      console.log(response);
      setProducts(response.data);
    }).catch(error => {console.log(error)})
  }, [])
  return (
    <section>
      <div>
        <img src={Cacto} alt="cacto" />
        <div>
          <h1>Echinocereus Cactus</h1>
          <h2> A Majestic Addition to Your Plant Collection</h2>
          <div>
            <h3>Features</h3>
            <ul>
              <li>Species: Echinocereus spp.</li>
              <li>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</li>
              <li>Blooming Season: Typicall y spring or summer, with flowers lasting several days to weeks.</li>
              <li>Pot Size: Available in various pot sizes to suit your preference and needs.</li>
            </ul>
            <h3>Description</h3>
            <p>Ladyfinger cactus (*Echinocereus pentalophus*) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage