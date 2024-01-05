import { Link } from 'react-router-dom';
import left from '../../../assets/leftplanthomepage.svg';
import icone from '../../../assets/retangleheader.svg';
import './SectionOne.css';

export default function SectionOne() {
    return (
        <section className='sectionone'>
            <div className='div_rigth'>
                <div className='div_container'>
                    <div className='div'>
                        <img src={icone} alt="icone" />
                        <p className='p_black'>Love for Nature</p>
                    </div>
                    <div className='div_descrip'>
                        <h1 className='h1'>Discover Your <span>Green</span> Side</h1>
                        <p className='p'>
                            We are your one-stop destination for all things green and growing.
                            Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis.
                        </p>
                    </div>
                    <Link className='shopnow' to='/ProductPage'>Shop now</Link>
                </div>
                <div className='div_left'>
                    <img src={left} alt="left" className='left_image' />
                </div>
            </div>
            <div className='rigth_image'></div>
        </section>
    );
}