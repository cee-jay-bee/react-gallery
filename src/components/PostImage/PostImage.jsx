import React from "react";
import {useState} from "react";
import axios from "axios";

function PostImage ( props ) {
    // const [name, setName] = useState( null );
    const [path, setPath] =  useState( '' );
    const [description, setDescription] =  useState( '' );
    
    const handlePathChange = ( event ) => {
        console.log('in handleURLChange', event.target.value );
        setPath(event.target.value);
    }

    const handleDescChange = ( event ) => {
        console.log('in handleDescChange', event.target.value );
        setDescription(event.target.value);
    }

    const addImage = () => {
        let imageToSend = {
            path,
            description
        }
        console.log('in addImage', imageToSend)
        
        axios.post(`/gallery`, imageToSend).then (( response )=>{
            props.getImages();
          }).catch( ( err )=>{
            console.log( err );
            alert( 'problem!' );
          })
    }
    return(
        <div>
            <form>
                <p className="addImage">Add Image to Gallery</p>
                <input type="text" placeholder="image url" onChange={ ( event )=> handlePathChange(event) } />
                <input type="text" placeholder="description" onChange={ ( event )=> handleDescChange(event) } />
                <button onClick={ addImage }>Add</button>
            </form>
        </div>
    )
}

export default PostImage;