import React from 'react'

import './ImageSearch.css'

// This is a functional component. Inside functional components, the this keyword does not work. 
const ImageSearch = ({handleGetRequest}) => {

   
    return(
        <div className="imageSearch">
            <form onSubmit={handleGetRequest} className="imageSearch__form">
                <input type="text" autoComplete="off" name="searchValue" placeholder="search for images..." />

                <button> Search </button>
            </form>
        </div>
    )
}


export default ImageSearch