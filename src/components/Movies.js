import React,{ useState } from 'react';


export const Movies = ({ movie }) => {
  const style = {
    color: movie.rating > 8 ? "crimson" : "blue"
  };

  const [Description, setDescription] = useState(true);
  const descStyle = {
    display: Description ? "block" : "none"
  };
  return (
    <div className="movie-container">

      <img src={movie.poster} alt={movie.name} className="movie-poster"></img>
      <div className="movie-specs">
        <h2 className='movie-name'>{movie.name}</h2>
        <p style={style} className='movie-rating'>{movie.rating}</p>

      </div>
      <button onClick={() => setDescription(!Description)}>Toggle</button>
      {Description ? <p className='movie-summary'>{movie.summary}</p> : null}

    </div>
  );
};
