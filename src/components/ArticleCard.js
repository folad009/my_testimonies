import React, { Component } from 'react';
import { Zoom } from 'react-slideshow-image'


const images = [
    '/assets/img/smd-001.png',
    '/assets/img/smd-002.png',
    '/assets/img/smd-003.png'
  ];
   
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }
   
  const Slideshow = () => {
      return (
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt={'altText'}/>)
          }
        </Zoom>
      )
  }

class ArticleCard extends Component {
    render() {

        return ( 
          <div>
           <div className="slide-container">
                <Slideshow />
            </div>
            <div className = "App" > 
    
            </div>
          </div>
        );
    }
}

export default (ArticleCard);