import React from 'react';
import './heroSection.css';
import image from '../assets/semeandoosolo2iStock.jpg'
import FontAwesomeIcon from 'fontawesome'
import faDatabase from 'fontawesome'

const heroSection = () => {
    return (
        <main className="main-section">
            <div className='landing'>
                <div className="main-image">
                    <img src={image} alt="Plantando sementes" />
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
                        <button className='btn acesseagr'>Acesse Agora!</button>
                    </div>

                </div>
            </div>
            <div className='diferenciais'>
                <h1>Diferenciais</h1>
                <ul>
                    <li><FontAwesomeIcon icon={faDatabase}/></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </main>
    );
}

export default heroSection;
