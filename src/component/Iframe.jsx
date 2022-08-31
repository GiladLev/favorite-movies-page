import "./iframe.css";

function Iframe({ favMovies, isOpen, IframeIndex}) {
  let newArr =[...favMovies]
  
  return (
    <div className="iframe">
      {isOpen && newArr[IframeIndex].link.split("watch?v=")[1]!=="undefined"?(
    
          <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${newArr[IframeIndex].link.split("watch?v=")[1]}`}
          ></iframe>
      ):
      <div></div>}

    </div>

    
  );
}
export default Iframe;
