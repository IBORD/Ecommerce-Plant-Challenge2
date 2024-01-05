import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './InSale.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const InSale = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/plants')
            .then(response => {
                console.log(response);
                setProducts(response.data);
            })
            .catch(error => { console.log(error) })

    }, [])
    console.log(products);
    if (!products || !products.length) return <> </>;
 

    return (
        <section>
            <h1 className='titulo'><span className='subtitle'>Plants In </span> Sale </h1>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            > {products.map((product) => {
                
                return <SwiperSlide>
                    <div>
                        <div><img src={product.imgUrl} alt="cacto" /></div>
                        <div className='nome'>{product.name}</div>
                        <div className='preco'>{product.price}</div>
                        <div className='label'>{product.label[0]}</div>
                    </div>
                </SwiperSlide>;
            })}

            </Swiper>
        </section>
    )
}

export default InSale