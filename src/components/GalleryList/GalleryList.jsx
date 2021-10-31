import React from "react";
import {useState} from "react";
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ( props ) {
    // const [name, setName] = useState( null );
    
    return(
        <div>
            <h1>Photos of My Life</h1>
            <div className="galleryOfPics">
            { props.images.map ( image =>(<GalleryItem image = { image } getImages={props.getImages} />))}
            </div>
        </div>
    )
}

export default GalleryList;