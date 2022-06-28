import React,{useState} from 'react';
import { Movies } from './Movies';


export const MovieList = ({ datas }) => {
  return (
    <div className='movie-list'>
      {datas.map((data, i) => { return <Movies movie={data} key={i} />})}
    </div>
  );
};

export const AddMovie = ({movie,setMovies}) => {
  const [Name   ,setName   ]=useState("");
  const [Poster ,setPoster ]=useState("");
  const [Rating ,setRating ]=useState("");
  const [Summary,setSummary]=useState("");

  const newMovie={
    name      :Name   ,
    poster    :Poster ,
    rating    :Rating ,
    summary   :Summary
  }
  return (
    <>
      <div className='add-movie-form'>
        <input placeholder='Name   ' onChange={(event)=>{setName   (event.target.value)}}></input>
        <input placeholder='Poster ' onChange={(event)=>{setPoster (event.target.value)}}></input>
        <input placeholder='Rating ' onChange={(event)=>{setRating (event.target.value)}}></input>
        <input placeholder='Summary' onChange={(event)=>{setSummary(event.target.value)}}></input>
        <button onClick={
          ()=>{
            setMovies([newMovie,...movie]);
            console.log(...movie)
            }
          }>AddMovie</button>
        
      </div>
    </>
  )
}