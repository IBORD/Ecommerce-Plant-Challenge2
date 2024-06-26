import Cacto from '../../assets/cactus.svg';
import Rodape from '../footer/Footer';
import Header from '../header/Header';
import './ProductPage.css';

const ProductPage = () => {

  return (
    <section className='productpage'>
      <Header />
      <div className='product_container'>
        <img src={Cacto} alt="cacto" />
        <div className='description_plant'>
          <h1>Echinocereus Cactus</h1>
          <h2> A Majestic Addition to Your Plant Collection</h2>
          <div className='options'>
            <p>indoor</p>
            <p>cactus</p>
          </div>
          <p>$139.99</p>
          <button className='checkout'>Check out</button>
          <div className='features'>
            <h3>Features</h3>
            <ul>
              <li>Species: Echinocereus spp.</li>
              <li>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</li>
              <li>Blooming Season: Typicall y spring or summer, with flowers lasting several days to weeks.</li>
              <li>Pot Size: Available in various pot sizes to suit your preference and needs.</li>
            </ul>
            <h3>Description</h3>
            <p className='p'>Ladyfinger cactus (*Echinocereus pentalophus*) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.</p>
          </div>
        </div>
      </div>
      <Rodape />
    </section>
  )
}

export default ProductPage