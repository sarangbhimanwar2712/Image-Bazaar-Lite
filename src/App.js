import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImagesList from "./Components/ImagesList";


const App= ()=>{
   let [info , setInfo] = useState("") ;

   console.log(info) ;
    
    return(
        <div>
            <SearchBar setInfo={setInfo}/>
            <ImagesList  images={info} /> 
        </div>
    )
}

export default App ;