const WordDisplay = () => {
    return ( 
        <div className="mt-4 row">
         <div className="col-9">
             <h1 className="fw-bold">Hello world</h1>
             <p className="lead purple-color">'spelled'</p>
         </div> 
         <div className="col-3" id="play">
             <a href="#" class="round-button"><span class="fa fa-play purple-color"></span></a>
         </div> 
        </div>
     );
}
 
export default WordDisplay;