import React from 'react'
import HeroSekcija from '../components/HeroSekcija'
import AboutUs from '../components/AboutUs'
import { Traka } from '../components/Traka'
import OurServices from '../components/OurServices'
import WhyChooseUsSection from '../components/WhyChooseUsSection'

const Pocetna = () => {
  return (
    <>
        <HeroSekcija
          naslov={"Your <span>Best Dental Experience</span> Awaits"}
          opis={"We are committed to providing you with the best dental care possible. Our team of experienced professionals is here to help you achieve a healthy and beautiful smile."}
          dugme1={"Explore Our Services"}
          dugme2={"Watch Video"}
          slika={'../../images/hero-doktorka.png'}
         />
        <AboutUs slika={'../../images/about-us.png'} 
          subtitle="ABOUT US"
          spanNaslov="15 Years of Expertise"
          naslov=" in Dental Care"
          opis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          prviElement="Premium Dental Services You Can Trust"
          drugiElement="Award-Winning Experts in Dental Care"
          treciElement="Dedicated Experts Behind Every Smile"
          dugmeText="Learn More"
        />
        <Traka />
        <OurServices />
        <Traka />
        <WhyChooseUsSection />

    </>
  )
}

export default Pocetna