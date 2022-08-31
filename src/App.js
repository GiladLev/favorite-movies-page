import "./App.css";
import { useState } from "react";
import Header from "./component/header";
import AddMovie from "./component/AddMovie";
import MovieComp from "./component/MovieComp";
import Iframe from "./component/Iframe";

function App() {

// state use
  const [favMovies, setfavMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [IframeIndex, setIframeIndex] = useState(0);

// helper func


  const sendMovies = (titleInput, imageInput, linkInput, setIsMOviewindow) => {
    if (titleInput !== "" && imageInput !== "" && linkInput !== "") {
      const movie = {
        image: imageInput,
        title: titleInput,
        link: linkInput
      };
      const newArr = [...favMovies, movie];
      setfavMovies(newArr);
      setIsMOviewindow("close");
    } else {
      alert("enter an item");
      return;
    }
  };

  return (
    <div className="App">
      
      {/* header */}
      <Header></Header>

      <AddMovie favMovies={favMovies} sendMovies={sendMovies} ></AddMovie>

      <MovieComp  favMovies={favMovies} setIsOpen={setIsOpen} setIframeIndex={setIframeIndex} setfavMovies={setfavMovies}></MovieComp>

      <Iframe favMovies={favMovies} isOpen={isOpen} IframeIndex={IframeIndex}></Iframe>
    </div>
  );
}

export default App;
