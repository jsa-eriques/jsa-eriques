import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/[removal.ai]jsa-eriques-1.png';
import Work from '../assets/clipart2655834.png'
import { useTypewriter } from 'react-simple-typewriter';

function Hero () {
  const {Eriques} = useTypewriter({
    words: ['Developer', 'Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">Eriques Andrade</h2>
        <h3 className="tagline animated">Desenvolvedor Front-End</h3>
        <br />
        <p className="paragraph">Bem-vindo(a) ao meu portfólio!
        <br /> 
        Profissional multifacetado com sólida experiência em desenvolvimento front-end, coordenação de marketing e gestão de projetos, busco uma nova oportunidade onde possa aplicar minha expertise em estratégias digitais, integração de sistemas e liderança de equipes para impulsionar o sucesso e a inovação da empresa.
        </p>
        <br />
        <div className="hero-btns">
          <button className="hire-me">
              <a href="https://drive.google.com/file/d/1hms42PdGqHVmWJ1pqyUhPXhwbFqzhsRf/view?usp=drive_link" target="_blank" rel="noreferrer">
                MEU CV
              </a>
          </button>
          <button className="lets-talk">
            <span><a href="jsa.eric@hotmail.com">CONTATO</a></span>
          </button>
        </div>
      </div>
        <img src={Work} alt="work-in-progress" className="work-in-progress" id="work-in-progress"/>
        <img src={Imu} alt="eriques" className="hero-image" id="my-photo"/>
    </div>
    <div className="social-icons">
        <a href="https://github.com/jsa-eriques" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/jsa-eriques" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        {/* <a href="https://wellfound.com/u/jsa-eriques" target="_blank" rel="noreferrer">
          <i className="fab fa-angellist" />
        </a> */}
        {/*<a href="https://www.twitter.com/jsa-eriques" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
      </a>*/}
      </div>
  </div>
  )
      };

export default Hero;
