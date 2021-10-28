import React from "react";
import {useState} from "react";
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ( props ) {
    // const [name, setName] = useState( null );
    
    return(
        <div>
            <h1>GalleryList</h1>
            { props.images.map ( image =>(<GalleryItem image = { image } />))}
        </div>
    )
}

export default GalleryList;