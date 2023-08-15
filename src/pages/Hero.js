import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/[removal.ai]jsa-eriques-1.png';
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
        <h3 className="tagline animated">Desenvolvedor Fullstack</h3>
        <br />
        <p className="paragraph">Bem-vindo(a) ao meu portfólio!
        <br /> 
        Sou um entusiasta e aspirante a Desenvolvedor Fullstack Junior, ansioso para embarcar em minha jornada no mundo do desenvolvimento web. Com uma paixão genuína pela tecnologia, venho explorando e aprendendo as nuances dessa area.</p>
        <br />
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://drive.google.com/file/d/1RIQlxcFspH89xvugEeEyvgSG_ABMX3rI/view?usp=drive_link" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              CONTACT ME
            </Link>
          </button>
        </div>
      </div>
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
        <a href="https://www.twitter.com/jsa-eriques" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
  </div>
  )
      };

export default Hero;
