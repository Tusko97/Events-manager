import React from "react";
import Highlights from "./Highlights";
import { Link } from 'react-router-dom';







function Home() {
  return <div>
   <div className="h-screen">
     <div className="relative h-[98%] flex items-center w-[99%] justify-end pr-40 bg-[url(https://img.freepik.com/free-photo/blue-designed-grunge-concrete-texture-vintage-background-with-space-text-image_1258-108928.jpg)] bg-cover">
     <video autoPlay muted loop className="h-5/6">
          <source
            src="https://www.zohowebstatic.com/sites/zweb/images/backstage/home/banner-intro.webm"
            type="video/mp4"
          />
        </video>
    </div>
    <div className="text-white text-xl flex flex-col pl-52 justify-center gap-8 absolute top-20 bg-white/30 h-full w-full">
        <h1 className="text-6xl font-semibold uppercase">Welcome to <br/><span className="text-rose-600">MIMIK</span> events.</h1>
    <p>Whether you're looking to learn something new, connect with like-minded individuals, <br/> or simply have a good time, MIMiK has an event for you.</p>
    <Link className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80" to="/signIn">Get started <i className="fa-solid fa-arrow-right ml-1"></i></Link>
    </div>
     </div>
     <Highlights/>

     
    </div>
}

export default Home;
