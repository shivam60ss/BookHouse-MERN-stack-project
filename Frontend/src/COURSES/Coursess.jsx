import React from 'react'
import Course from '../components/course'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'

const Coursess = () => {
  return (
    <>
    <NavBar />
    <div className="min-h-screen">
        <Course />
    </div>
    <Footer />
    

   </>
  );
}

export default Coursess
