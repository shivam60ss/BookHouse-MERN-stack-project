import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json";
import { Link } from 'react-router-dom';


const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-3'>
        <div className='mt-20 item-center justify-center text-center  '>
          <h1 className='text-2xl font-semibold md:text-4xl pt-10'>we are delighted to have you <span className='text-green-400'>Here!</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laborum, iste voluptatem recusandae asperiores, commodi sequi earum fugiat possimus veritatis laudantium ab modi! Perferendis, exercitationem.</p>
          <Link to="/">
          <button className='mt-6 bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600 duration-300'>Back</button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>{
              return <Cards key={item.id} item={item} />
            })
          }  
        </div>

      </div>

    </>
  );
}

export default Course
