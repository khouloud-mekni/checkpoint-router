import React from 'react'
import './CardMovie.css'

import ReactStars from 'react-stars'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
const Cardmovie = ({movie}) => {
  
  return (
   <div className='cards'>
   <div className="card">
   <img src={movie.posterUrl} alt="posterimg" width="200px" height="150PX"/>
   <div className='starsrate'>
   <ReactStars 
   value={movie.rating}
   half={false}
   count={5}
   size={24}
   edit={false}
    />
   </div>
   <Link to={`/details/${movie.id}`}> <Button variant='warning'>
   View More
   </Button></Link>
   <h2 className="card-title">{movie.title}</h2>
   
   </div>
   </div>
   
 
  

  )
}

export default Cardmovie