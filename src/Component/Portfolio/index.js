import React, {useState,useEffect} from 'react';
import {PP,PPSpan,PortFolio,PortFolioImg,PortFolioItem,PortFolioList,PortFolioSpan,PortFolioTitle,Box} from './style';
import axios from 'axios';

function Portfolio() {
  let  [images ,setImages] = useState([]);
    useEffect( () => {
    axios.get('js/data.json').then( res => { 
      setImages(res.data.portfolio);
    } ) 
  } , [] );
    const protImages = images.map((item) => {
    return(
      <Box key={item.id}>
      <PortFolioImg src={item.image} alt=""/>
      <PP>
          <PPSpan>
              Show Image
          </PPSpan>
      </PP>
  </Box> 
    )
  });
    return (
      <PortFolio className="portfolio">
      <PortFolioTitle className="portfolio-title"><PortFolioSpan>My</PortFolioSpan> Portfolio</PortFolioTitle>
      <PortFolioList className="portfolio-list">
          <PortFolioItem active className="active">All</PortFolioItem>
          <PortFolioItem className="portfolio-item">HTML</PortFolioItem>
          <PortFolioItem className="portfolio-item">Photoshop</PortFolioItem>
          <PortFolioItem className="portfolio-item">Wordpress</PortFolioItem>
          <PortFolioItem className="portfolio-item">Mobile</PortFolioItem>
      </PortFolioList>
      
      <div className="box">
          {protImages}
      </div>
  </PortFolio>
      );
}

export default Portfolio;