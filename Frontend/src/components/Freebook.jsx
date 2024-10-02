import React from 'react'
import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Cards from '/compounts/Cards.jsx'
import Cards from './Cards';
import Slider from "react-slick";

const Freebook = () => {
  const filterData = list.filter((data)=> data.category === "Free");
  console.log(filterData);

  var settings = {
    dots: true ,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-7">
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis sunt eum quia reprehenderit minus vel adipisci consequuntur laudantium ipsa voluptatum libero eveniet ad porro tempora ab, iusto, dolorum sequi!</p>

        </div>

        <div className=' color-black'>
          <Slider {...settings}>
            {filterData.map((item)=>(
              <Cards item={item} key={item.id}/> //cards
            ))}
          </Slider>

        </div>
      </div>
    </>
  )
}

export default Freebook
