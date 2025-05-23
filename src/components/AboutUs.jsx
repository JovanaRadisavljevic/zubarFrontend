import React from 'react'
import './CSS/AboutUs.css'
import { FaCheckCircle } from 'react-icons/fa'

const AboutUs = (props) => {
    const {
        slika,
        subtitle,
        spanNaslov,
        naslov,
        opis,
        prviElement,
        drugiElement,
        treciElement,
        dugmeText
    } = props;

  return (
    <>
        <section className="aboutus-section">
            <div className="aboutus-content">
                <div className="about-slika">
                    <img src={slika} alt="Slika zuba" />
                </div>

                <div className="about-text">
                    <p className="about-subtitle">{subtitle}</p>
                    <h2><span className='hightlights'>{spanNaslov}</span>{naslov}</h2>
                    <p className="about-description">
                        {opis}
                    </p>
                    <ul className='about-lista'>
                        <li><FaCheckCircle className='icon' />{prviElement}</li>
                        <li><FaCheckCircle className='icon' />{drugiElement}</li>
                        <li><FaCheckCircle className='icon' />{treciElement}</li>
                    </ul>
                    <button>{dugmeText}</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUs