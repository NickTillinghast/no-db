import React, { Component } from "react";
import axios from "axios";
import AddButton from "./components/AddButton";
import SingleImage from "./components/SingleImage";
import MainImageComponent from "./components/MainImageComponent";

// import CommentCard from "./";
import "./App.css";
// import Header from "./Header/Header";

// {
//   "id": 1,
//   "image": "https://res.cloudinary.com/dqpatwz6c/image/upload/v1570586040/No%20Db%20images/kzcogwfgob1gplz1f6fy.jpg",
//   "comment": [],
//   "type": "wedding",
//   "color": "color"
// },

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhotos: []
    };
    this.getAllPhotos = this.getAllPhotos.bind(this);
    this.addComment = this.addComment.bind(this);
  }
  componentDidMount() {
    this.getAllPhotos();
  }
  getAllPhotos() {
    axios
      .get("/api/all_photos")
      .then(response => {
        this.setState({
          allPhotos: response.data
        });
      })
      .catch(err => console.log(err));
  }
  addComment() {
    axios.post("/api/add_comment/:id").then(response => {
      this.setState({});
    });
  }

  deleteComment() {
    axios.delete("/api/delete_comment/:id").then(response => {
      this.setState({});
    });
  }

  render() {
    const { allPhotos } = this.state;
    const mappedPhotos = allPhotos.map(photo => {
      return (
        <div>
          <SingleImage key={photo.id} photo={photo.image} />
        </div>
      );
    });
    return (
      <div>
        <div className="App">
          {/* <Header /> */}
          <header className="App-Header">
            Photo Critique
            <div>Filter</div>
            <div>Website</div>
            <div>About</div>
            <div>Rules</div>
          </header>
        </div>
        {/* <AddButton addComment={this.addComment} /> */}
        <MainImageComponent className="main-image" />
        {mappedPhotos}
      </div>
    );
  }
}
export default App;
