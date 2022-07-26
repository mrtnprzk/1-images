import React, { Component } from 'react';
import axios from "axios";
import ImageList from './ImageList';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {images: []};
  }

  componentDidMount() {
    //Fantastic Place to Load Data!
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => this.setState({ images: response.data.data.memes }))
      .catch((error) => console.log(error))
      .then(function () {
        // always executed
      });
  }

  render() {
    
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
};
