import React, { useState, useEffect } from "react";

const AutoCourseSwitcher = () => {
  const courses = ["AI", "HTML", "CSS", "JavaScript", "C++"];
  const [currentCourse, setCurrentCourse] = useState("AI");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * courses.length);
      setCurrentCourse(courses[randomIndex]);
    }, 2000); // Change course every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [courses]);

  return (
    <div>
      <span className="poc-hero-title-animated-wrapper">
        <p className="poc-hero-title-animated">{currentCourse}</p>
      </span>
    </div>
  );
};

export default AutoCourseSwitcher;
