import React, { useEffect , useState } from 'react'
import {useParams} from "react-router-dom";
import "./MovieDetails.css"
const MovieDetails = ({filtredMovie}) => {
  let {id} = useParams()
 
const [selected, setSelect] = useState({})

  useEffect(()=>{
    setSelect(filtredMovie.filter((movie)=>movie.id === id)[0])
  },[id])
  

  return (
    <div className='movie-detail'>
    <h1>{selected.title}</h1>
     <iframe width="760" height="315" 
     src={selected.trailer} title={selected.title}
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>   
      <p> {selected.description} </p>
       </div>
  )
}

export default MovieDetails