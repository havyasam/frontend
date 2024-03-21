import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);   

  const tick = () => {
    setCurrentTime(new Date());
  };

  return (
    <div className="navbar">
      <h2 align="center" className="time">
        {currentTime.toLocaleTimeString()}
      </h2>
    </div>
  );
};

export default Navbar;