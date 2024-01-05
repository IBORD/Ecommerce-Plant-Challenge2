import { Link } from 'react-router-dom';
import NutrientsandFertilizing from '../../../assets/NutrientsandFertilizing.svg';
import Rectangle32 from '../../../assets/Rectangle32.svg';
import Rectangle33 from '../../../assets/Rectangle33.svg';
import Rectangle34 from '../../../assets/Rectangle34.svg';
import Sunlight from '../../../assets/Sunlight.svg';
import Watering from '../../../assets/Watering.svg';
import './SectionTwo.css';

export default function SectionTwo() {
    return (
        <section className="sectiontwo">
            <div className="main_container">
                <div className="first_container">
                    <h1>Steps To Take Care Of Your <span>Plants</span></h1>
                    <p>
                        By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to maintaining healthy and thriving plants.
                    </p>
                </div>
                <div className="second_container">
                    <div>
                        <img src={Watering} alt="Watering" />
                        <h2>Watering</h2>
                        <p>
                            water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.
                        </p>
                    </div>
                    <div>
                        <img src={Sunlight} alt="Sunlight" />
                        <h2>Sunlight</h2>
                        <p>
                            Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs
                        </p>
                    </div>
                    <div>
                        <img src={NutrientsandFertilizing} alt="NutrientsandFertilizing" />
                        <h2>Nutrients and Fertilizing</h2>
                        <p>
                            Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula.
                        </p>
                    </div>
                </div>
                <div className="third_container">
                    <img src={Rectangle32} alt="Rectangle32" />
                    <img src={Rectangle33} alt="Rectangle33" />
                    <div>
                        <img src={Rectangle34} alt="Rectangle34" />
                        <p>
                            Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. In addition to our extensive plant selection, we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. But we don't stop there! We believe that knowledge is the key to a thriving garden, so we offer a wealth of information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey, our goal is to inspire and support you every step of the way. Get ready to explore our virtual garden and discover the joys of gardening with us!
                        </p>
                        <Link className='shopnow' to='/ProductPage'>Shop now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}