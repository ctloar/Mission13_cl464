import { useState } from 'react';
import data from './MovieData.json';

const MDS = data.MovieDataList;

function MovieList() {
  const [listMovies, setListMovies] = useState(MDS);
  const addMovie = () => {
    setListMovies([
      ...MDS,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Begins',
        Year: 2005,
        Director: 'Christopher Nolan',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <div>
        <h3>Joel film collection</h3>
      </div>
      <div className="p-5">
        <table className="table table-dark table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
