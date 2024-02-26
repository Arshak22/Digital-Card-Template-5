import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

//Test Listing Images
import L1 from '../../assets/L1.jpg';
import L2 from '../../assets/L2.jpg';

export default function Listings() {
  const settings = {
    dots: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    focusOnSelect: true,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      id: 1,
      address: '4420 Glenwood Dr, Charlotte, NC 28208',
      price: '$350,000',
      beds: '3',
      baths: '1',
      sqft: '1,884',
      picture: L1,
      link: '#',
    },
    {
      id: 2,
      address: '4420 Glenwood Dr, Charlotte, NC 28208',
      price: '$500,000',
      beds: '2',
      baths: '3',
      sqft: '1,704',
      picture: L2,
      link: '#',
    },
    {
      id: 3,
      address: '4420 Glenwood Dr, Charlotte, NC 28208',
      price: '$350,000',
      beds: '3',
      baths: '1',
      sqft: '1,884',
      picture: L1,
      link: '#',
    },
    {
      id: 4,
      address: '4420 Glenwood Dr, Charlotte, NC 28208',
      price: '$500,000',
      beds: '2',
      baths: '3',
      sqft: '1,704',
      picture: L2,
      link: '#',
    },
  ];
  return (
    <div className='Listings'>
      <h1 className='headline'>Listings</h1>
      <div className='listings-showcase'>
        <Slider {...settings}>
          {data.map((elem, index) => {
            return (
              <div className='single-listing' key={index}>
                <a href={elem.link} target='_blank' rel='noopener noreferrer'>
                  <img src={elem.picture} alt={elem.picture} />
                </a>
                <div className='listing-info'>
                  <a href={elem.link} target='_blank' rel='noopener noreferrer'>
                    <h3 className='listing-address'>{elem.address}</h3>
                  </a>
                  <a href={elem.link} target='_blank' rel='noopener noreferrer'>
                    <h2 className='listing-price'>{elem.price}</h2>
                  </a>
                  <div className='listing-numbers-info'>
                    <h3>
                      <span className='listing-number'>{elem.beds}</span> beds
                    </h3>
                    <h3>
                      <span className='listing-number'>{elem.baths}</span> baths
                    </h3>
                    <h3>
                      <span className='listing-number'>{elem.sqft}</span> sqft
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
