import React from "react";

const ImagesList = ({images})=>{


    return(
        <div>
            {
                images &&
                images.map((value , index)=>{
                    console.log(value.urls.small)
                    return (
                        <img key={index} 
                    src={value.urls.small} alt={value.alt_description} />
                    )
                    })
            }
        </div>
    )
}

export default ImagesList ; 