import Counter from "./counter";
import "./MovieComp.css";
function MovieComp({ favMovies, setIsOpen, setfavMovies, setIframeIndex }) {
  function removemovie(index) {
    const removeMOvieArr = [...favMovies];
    const spliceMovie = removeMOvieArr.splice(index, 1);
    setfavMovies(removeMOvieArr);
  }
  return (
    <div>
      <div className="head-container align-items-center d-flex justify-content-around bg-danger text-light mt-3">
        <div>Image</div>
        <div>Title</div>
        <div>Trailer</div>
        <div></div>
      </div>

      {favMovies.map((movie, index) => {
        return (
          <div
            className="row-container d-flex align-items-center justify-content-around text-black bg-light"
            key={index}
          >
            <div className="img-container">
              <img
                className="imgOfMovie"
                src={Object.values(movie)[0]}
                alt=""
                onClick={() => {
                  setIsOpen(true);
                  setIframeIndex(index)
                }}
              />
            </div>
            <div>
              <p>{Object.values(movie)[1]}</p>
            </div>
            <div>
              <Counter></Counter>
            </div>
            <div>
              <button
                className="btn btn-light"
                variant="light"
                onClick={() => removemovie(index)}
              >
                ❌
              </button>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default MovieComp;
