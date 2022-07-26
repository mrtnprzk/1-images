import React from 'react';
import ImageDetail from './ImageDetail';


const ImageList = (props) => {

  return (
    <ul className='media-list list-group'>
      {props.images.map(img => (
        <ImageDetail key={img.id} image={img}/>
      ))}
    </ul>
  );
}

export default ImageList