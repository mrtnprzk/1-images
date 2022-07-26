import React from 'react';

const ImageDetail = (props) => {

    console.log(props);
    
  return (
    <li className="meida list-group-item">
      <div className="media-left">
        <img src={props.image.url} alt={props.image.name} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.image.name}</h4>
        <p>
          loasdasd asd asd asd asdasdasdas asd asd asdas dasd asd asd asd asd
          asd asd asd ad asd asdasd a sadasdasdasdasd asd asd asdsadas
          asdasdasdasd asd asdasdasdasda asd as.
        </p>
      </div>
    </li>
  );
};

export default ImageDetail;