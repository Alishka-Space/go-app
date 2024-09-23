import React from 'react'
import { useParams } from 'react-router-dom'
import { toursList } from '../../data';
import Rating from '../../components/tours/Rating';
import './single-tour.css'

const SingleTour = () => {
  const {id} = useParams();
  // console.log(params);

  const tour =  toursList.find(t => t.id === +id); //parseInt(id)

  console.log(tour);



  return ( <section className="tour">
    <div className="tour-step">
      United Arab Emirates <i className="bi bi-chevron-right"></i>
      Things to do in Dubai <i className="bi bi-chevron-right"></i>
    </div>
    <div className="tour-category">ADVENTURE</div>
    <h1 className="tour-title">DUBAI:{tour.title}</h1>
    <div className="tour-info">
      <Rating rating={tour.rating} reviews={tour.reviews} />
      <div className="tour-provider">
        Activity Provider BY: <span>Ali Ibrahim </span>
      </div>
    </div>
  </section>
    
  )
}

export default SingleTour
