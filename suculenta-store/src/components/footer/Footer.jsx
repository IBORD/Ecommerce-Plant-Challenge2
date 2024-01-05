import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import './Footer.css';

export default function Rodape() {
    return (
        <footer>
            <div className='geral'>
                <div className="container-infos">
                    <div className="contatos">
                        <h1>Stay Fresh</h1>
                        <p>compassinhos@gmail.com</p>
                        <p>+55 (41) 99999-9999</p>
                    </div>
                    <div className='links'>
                        <div className="infos">
                            <h2>Links</h2>
                            <Link className="opcoes" to='/AboutUs'>About Us</Link>
                            <Link className="opcoes" to='/ProductPage'>Products</Link>
                            <Link className="opcoes" to='/'>Blogs</Link>
                        </div>
                        <div className="infos">
                            <h2>Community</h2>
                            <Link className="opcoes" to='/AboutUs'>About Us</Link>
                            <Link className="opcoes" to='/ProductPage'>Products</Link>
                            <Link className="opcoes" to='/'>Blogs</Link>
                        </div>
                    </div>
                </div>
                <div className='container-fundo'>
                    <img src={Logo} alt="Logo" className='logo' />
                    <div className="fundo">
                        <p>Compassinhos ®. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
