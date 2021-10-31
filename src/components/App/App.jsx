import React, {useState} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import {useEffect} from "react";
import axios from "axios";
import PostImage from "../PostImage/PostImage"

function App() {
  const [images, setImages] = useState( [] );

  useEffect( () => {
    console.log( 'component loaded' );
    getImages();
  }, []);

  const getImages = ()=>{
    axios.get('/gallery' ).then (( response )=>{
      setImages(response.data);
    }).catch( ( err )=>{
      console.log( err );
      alert( 'problem!' );
    })
  }

  return (
    <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <PostImage getImages = {getImages}/>
        <GalleryList images = { images } getImages = {getImages} />
      </div>
  );
}

export default App;
