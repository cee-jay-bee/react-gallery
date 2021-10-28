import React from "react";
import {useState} from "react";

function GalleryItem ( props ) {
    // const [name, setName] = useState( null );
    const [show, setShow]=useState( true );

    const toggleShow = () =>{
        setShow(!show);
    }

    return(
        <div>
            {
                show ?
                <img onClick={ toggleShow } src={props.image.path} />:
                <h1 onClick={ toggleShow }>{props.image.description}</h1>
            }
        </div>
    )
}

export default GalleryItem;