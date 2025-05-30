import React from 'react'
import './CSS/ServiceCard.css'
import { GrLinkNext } from 'react-icons/gr';

const ServiceCard = (props) => {
  const {icon,image,title,description,onLearnMore} = props;
  return (
    <div className='service-card'>
        <div className="image-wrapper">
            <img src={image} alt={title} className='card-image'/>
            <div className="icon-wrapper">
                <img src={icon} alt="icon" className='icon-tooth' />
            </div>
        </div>
        <div className="card-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <button className='learn-more'
            onClick={onLearnMore}
            >Learn more<GrLinkNext /></button>
        </div>
    </div>
  )
}

export default ServiceCard