import React ,{useState , useEffect} from "react";
import axios from "axios";

//ACCESS DATA FROM .env
// console.log("Client_id",process.env.REACT_APP_CLIENT_ID) ;

const SearchBar = ({setInfo})=>{

    let[search , setSearch] = useState("") 
    // let [info , setInfo] = useState([]) ;

    useEffect(()=>{
         getImages()
    },[])

    async function getImages(){

        try{
            let request = await axios.get("https://api.unsplash.com/search/photos", {
                params :{
                    query: search || "nature",
                } ,
                headers:{
                    authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
                }
            })
            // console.log(request.data.results) ;
            setInfo(request.data.results) ;
        }
        catch(error){
            console.log(error) ;
        }

    }


    return(
        <div>
            <input type="text" placeholder="Search..." 
             onChange={(e)=> setSearch(e.target.value)}
             value={search}
            />
            <button onClick={getImages}>Search</button>
        </div>
    )
}

export default SearchBar ;