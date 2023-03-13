import React from 'react'
import Cardmovie from '../CardMovie/Cardmovie'

const ListMovie = ({filtredMovie}) => {
  return (
    filtredMovie.map((movie)=><Cardmovie movie={movie}/>)
  )
}

export default ListMovie