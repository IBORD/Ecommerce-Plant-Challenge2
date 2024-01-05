import { Link } from "react-router-dom";
import AboutUsimg from '../../assets/AboutUsimg.jpg';
import Rodape from "../footer/Footer";
import Header from "../header/Header";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <section className="aboutus">
            <Header />
            <div className="img">
                <img src={AboutUsimg} alt="AboutUs" />
            </div>
            <div className="description">
                <h1>Quem Somos Nós?</h1>
                <p>Somos um time de estagiários focado no Front-end, com tecnologias bem conhecidas no mercado atual, entre elas está o React JS ,a principal linguagem utilizada por nós nesse projeto.</p>
            </div>
            <div className="infos">
                <div className="info">
                    <h1>Gabriel de Mendonça</h1>
                    <Link className="shopnow" to="https://www.instagram.com/bielmd12" target="_blank">Instagram </Link>
                    <Link className="shopnow" to="https://www.linkedin.com/in/gabriel-de-mendon%C3%A7a-264859207/" target="_blank">Linkedin </Link>
                </div>

                <div className="info">
                    <h1>João Lucas Laguna Sabadini</h1>
                    <Link className="shopnow" to="https://www.instagram.com/jlsabadini" target="_blank">Instagram </Link>
                    <Link className="shopnow" to="https://www.linkedin.com/in/jllsabadini/" target="_blank">Linkedin </Link>
                </div>

                <div className="info">
                    <h1>Jose Alves de Oliveira Neto</h1>
                    <Link className="shopnow" to="https://www.instagram.com/netiinho.alves" target="_blank">Instagram </Link>
                    <Link className="shopnow" to="https://www.linkedin.com/in/jos%C3%A9-alves-48439a1a1/" target="_blank">Linkedin </Link>
                </div>

                <div className="info">
                    <h1>Marcio Alberto de Oliveira Lourenço</h1>
                    <Link className="shopnow" to="https://www.instagram.com/marcio_lou20" target="_blank">Instagram </Link>
                    <Link className="shopnow" to="https://www.linkedin.com/in/marcio-louren%C3%A7o-a6313a218/" target="_blank">Linkedin </Link>
                </div>
            </div>
            <Rodape />
        </section>
    );
}

export default AboutUs;