import './tour-list.css';


import React from 'react'
import TourItem from './TourItem';

const TourList = ({toursList}) => {
  return (
    <div className="tour-list">
      {toursList.map(item => 
      <TourItem key={item.id} item={item} />

    )}
    </div>
    )}

export default TourList
