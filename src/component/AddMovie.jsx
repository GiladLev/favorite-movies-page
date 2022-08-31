import { useState } from "react";
import "./AddMovie.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function AddMovie({ favMovies, sendMovies }) {
  const [MOvieWindow, setIsMOviewindow] = useState("close");

  //   const [favMovies, setfavMovies] = useState([]);

  const [titleInput, settitleInput] = useState("");
  const [imageInput, setimageInput] = useState("");
  const [linkInput, setlinkInput] = useState("");

  return (
    <div>
      <br />
      <button
        onClick={() => setIsMOviewindow("open")}
        type="button"
        className="btn btn-danger"
      >
        Add New Movie
      </button>
      <br />
      {/* add moviee form*/}
      <div className={`addNewMovieWindow ${MOvieWindow}`}>
        <br />
        <div className="input-group mb-3">
          <span className="input-group-text bg-danger text-light" id="inputGroup-sizing-default">
            Image:
          </span>
          <input
            onChange={(e) => setimageInput(e.target.value)}
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          ></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text bg-danger text-light" id="inputGroup-sizing-default">
            Title:
          </span>
          <input
            onChange={(e) => settitleInput(e.target.value)}
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          ></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text bg-danger text-light" id="inputGroup-sizing-default">
            Trailer
          </span>
          <input
            onChange={(e) => setlinkInput(e.target.value)}
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          ></input>
        </div>

        <button
          onClick={() =>
            sendMovies(titleInput, imageInput, linkInput, setIsMOviewindow)
          }
          type="button"
          className="btn btn-danger mb-3"
        >
          Save
        </button>
        <br />
      </div>
    </div>
  );
}
export default AddMovie;
