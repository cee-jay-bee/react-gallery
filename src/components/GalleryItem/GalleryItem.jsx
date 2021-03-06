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

        axios.put(`/gallery/like/${props.image.id}`, {likes: ++props.image.likes}).then (( response )=>{
          props.getImages();
        }).catch( ( err )=>{
          console.log( err );
          alert( 'problem!' );
        })
    }

    const deleteImage = () => {
        
        let deleteID = props.image.id;

        axios.delete(`/gallery/delete/${deleteID}`).then (( response )=>{
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
                <h4 onClick={ toggleShow } className="description">{props.image.description}</h4>
            }
            <br />
            <button className="likeButton" onClick={ changeLikes }>Like</button>
            <button className="deleteButton" onClick={ deleteImage }>Delete</button>
            <p>Number of Likes: { props.image.likes }</p>
        </div>
    )
}

export default GalleryItem;