import React from "react";
import {useState} from "react";
import axios from "axios";

function GalleryItem ( props ) {
    // const [name, setName] = useState( null );
    const [show, setShow]=useState( true );

    const toggleShow = () =>{
        setShow(!show);
    }

    const changeLikes = ()=>{
        axios.put(`/gallery/like/${props.image.id}`).then (( response )=>{
          console.log(response.data);
          props.getImages();
        }).catch( ( err )=>{
          console.log( err );
          alert( 'problem!' );
        })
    }

    

    return(
        <div className="images">
            {
                show ?
                <img className="lifeImage" onClick={ toggleShow } src={props.image.path} />:
                <span onClick={ toggleShow }>{props.image.description}</span>
            }
            <button className="likeButton" onClick={ changeLikes }>Like</button>
            <p>Number of Likes: { props.image.likes }</p>
        </div>
    )
}

export default GalleryItem;