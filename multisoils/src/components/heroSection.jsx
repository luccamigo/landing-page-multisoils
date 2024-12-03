import React from 'react';
import './heroSection.css';
import image1 from '../assets/semeandoosolo2iStock.jpg'
import placeholderimg from '../assets/sem-imagem-avatar.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faDesktop, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const heroSection = () => {
    return (
        <main className="main-section">
            <div className='landing'>
                <div className="main-image">
                    <img src={image1} alt="Plantando sementes" />
                </div>
                <div className="main-text">
                    <h1>O que é?</h1>
                    <p>O MULTISOILS é uma plataforma inovadora criada para facilitar a classificação, análise e gerenciamento de solos, integrando dados geológicos, ambientais e de mapeamento. A plataforma foi projetada para apoiar tanto especialistas quanto técnicos em tomadas de decisões complexas relacionadas ao uso sustentável e ao manejo de solos, com aplicações diretas em áreas como agricultura, gestão de recursos naturais e urbanização. O sistema oferece uma abordagem modular, permitindo que diferentes funções e análises sejam realizadas com base em dados coletados no campo e processados diretamente na plataforma.</p>
                    <div className='centralizer'>
                        <a className='btn acesseagr' href='https://multisoils.org/register'>Acesse Agora!</a>
                    </div>
                </div>
            </div>
            <div className='diferenciais'>
                <h1>Diferenciais</h1>
                <ul className='listaDiferenciais'>
                    <li>
                        <FontAwesomeIcon icon={faDatabase} className='iconDif' />
                        <h2>Consultas e adições a qualquer momento</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faDesktop} className='iconDif' />
                        <h2>Gerenciar projetos de  mapeamento de solos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNewspaper} className='iconDif' />
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
