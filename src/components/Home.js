import React from 'react';
import Banner from './Banner.js';
import OfferItem from './OfferItem.js';
import Reservation from './Reservation.js';
import MenuItemStart from './MenuItemStart.js';
import TeamStart from './TeamStart.js';
import AddSliderStart from './AddSliderStart.js';
import DownloadAppStart from './DownloadAppStart.js';
import Testonomial from './Testonomial.js';
import Counter from './Counter.js';
import Blog from './Blog.js';
import Footer from './Footer.js';
export default function Home() {
  return (
    <div>
      <Banner/>
      <OfferItem/>
      <Reservation/>
      <MenuItemStart/>
      <TeamStart/>
      <AddSliderStart/>
      <DownloadAppStart/>
      <Testonomial/>
      <Counter/>
      <Blog/>
      <Footer/>
    </div>
  )
}
