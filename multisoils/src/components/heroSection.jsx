import React from 'react';
import './heroSection.css';
import image1 from '../assets/semeandoosolo2iStock.jpg'
import placeholderimg from '../assets/vascão.jpg'

const heroSection = () => {
    return (
        <main className="main-section">
            <div className='landing'>
                <div className="main-image">
                    <img src={image1} alt="Plantando sementes" />
                </div>
                <div className="main-text">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eu luctus dolor, at condimentum massa. Aliquam erat volutpat.
                        Curabitur nec sapien tristique, sodales odio vitae, ornare eros.
                        Nunc quis faucibus justo. Sed at enim a massa malesuada venenatis.
                        Vivamus tempor ex a eros rutrum lacinia.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Aenean ac suscipit ante, a euismod odio. Donec et malesuada sem,
                        sit amet dapibus est. Nulla rhoncus nisl vel mauris pulvinar, in finibus metus iaculis.
                        Proin euismod, est non auctor fermentum, augue quam venenatis dolor, sit amet sollicitudin tortor metus at magna.
                        Praesent faucibus ligula neque, volutpat sodales metus maximus nec.
                        Donec eget risus nec elit aliquet convallis in eu libero.
                        Cras massa orci, rutrum quis dignissim vel, tempus quis velit.</p>
                    <div className='centralizer'>
                        <a className='btn acesseagr' href='https://multisoils.com.br/register'>Acesse Agora!</a>
                    </div>
                </div>
            </div>
            <div className='diferenciais'>
                <h1>Diferenciais</h1>
                <ul className='listaDiferenciais'>
                    <li>
                        <img src={placeholderimg} className='iconDif'></img>
                        <h2>Consultas e adições a qualquer momento</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <img src={placeholderimg} className='iconDif'></img>
                        <h2>Gerenciar projetos de  mapeamento de solos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <img src={placeholderimg} className='iconDif'></img>
                        <h2>Relatórios sobre os dados enviados</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                </ul>
            </div>
            <div className='Responsaveis'>
                <h1>Responsáveis</h1>
                <ul className='listaResponsaveis'>
                    <li>
                        <img src={placeholderimg} className='fotoResponsavel'></img>
                        <h2>Diego Brandão</h2>
                        <p>Ciências da Computação</p>
                        <p>CEFET - Maracanã</p>
                    </li>
                    <li>
                        <img src={placeholderimg} className='fotoResponsavel'></img>
                        <h2>Renato Campos Mauro</h2>
                        <p>Ciências da Computação</p>
                        <p>CEFET - Maracanã</p>
                    </li>
                    <li>
                        <img src={placeholderimg} className='fotoResponsavel'></img>
                        <h2>Marcos Bacis Ceddia</h2>
                        <p>Agronomia</p>
                        <p>UFRRJ - Seropédica</p>
                    </li>
                    <li>
                        <img src={placeholderimg} className='fotoResponsavel'></img>
                        <h2>Jorge de Abreu Soares</h2>
                        <p>Ciências da Computação</p>
                        <p>CEFET - Maracanã</p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default heroSection;
