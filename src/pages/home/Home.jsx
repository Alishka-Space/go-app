import { useState } from 'react';
import {toursList} from '../../data'
import React from 'react'
import HeroHeader from '../../components/hero-header/HeroHeader';
import Pagination from '../../components/pagination/Pagination';
import Services from '../../components/services/Services';
import TourList from '../../components/tours/TourList';
import SortInput from '../../components/sort-input/SortInput'
import Banner from '../../components/banner/Banner'
import NewsLetter from '../../components/news-letter/NewsLetter';





const Home = () => {

    const [currentPage,setCurrentPage] = useState(1); // current page

  const [sortItem,setSortItem] = useState("recommended"); // sort item


  const TOUR_PER_PAGE = 6;  // 6 tours per page
  const pages = Math.ceil(toursList.length / TOUR_PER_PAGE);  // to make integer number of pages 
  const startIndex = (currentPage - 1) * TOUR_PER_PAGE;  // to know the start index of the tours
  const finishIndex = currentPage * TOUR_PER_PAGE;  // to know the finish index of the tours

    // sort tour
  const sortedTourList =
  sortItem === "low"
  ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
  : sortItem === "high" ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
  : toursList.sort((a,b) => b.rating - a.rating);

  const orderedTourList =  sortedTourList.slice(startIndex,finishIndex);  // pagination

    return (
        <div>
            <HeroHeader />
            <Services />
            <SortInput setSortItem={setSortItem}
                       sortItem={sortItem} 
                       toursLength={toursList.length} 
                       />
            <TourList toursList={orderedTourList} />
            <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
            <Banner />
            <NewsLetter />
        </div>

    )

}

export default Home
