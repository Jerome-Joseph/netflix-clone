import React from 'react'
import "./styles/Banner.css"

const Banner = () => {

    function truncate(string , n){
        return string.length > n ? string.substr(0, n - 1) + '...' : string;
    }

  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center"
    }}>
     <div className="banner__contents">
         <h1 className="banner__title">Movie Name</h1>
         <div className="banner__buttons">
             <button className='banner__button'>Play</button>
             <button className='banner__button'>My List</button>
         </div>
         <h1 className="banner__description">{truncate(`This is the banner descriptoiobn Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam obcaecati fugit consectetur praesentium impedit dolorum perspiciatis repellat, delectus ratione! Itaque quasi consectetur aperiam reprehenderit maxime possimus dolor voluptate recusandae. Provident?`, 150)}</h1>
     </div>

     <div className="banner--fadebottom" />
    </header>
  )
}

export default Banner