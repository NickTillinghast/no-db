const photoData = require("../data.json");

module.exports = {
  getAllPhotos: (req, res, next) => {
    res.status(200).send(photoData);
  },

  getPhotoById: (req, res, next) => {
    const { id } = req.params;
    const index = photoData.findIndex(element => {
      return element.id === parseInt(id);
    });
    if (index !== -1) {
      res.status(200).send(photoData[index]);
    } else {
      res.status(404).send("photo doesn't exist");
    }
  },

  addComment: (req, res, next) => {
    const { id } = req.params;
    const { newComment } = req.body;
    console.log(newComment);
    const index = photoData.findIndex(text => {
      return text.id === parseInt(id);
    });
    if (index !== -1) {
      photoData[index].comment.push(newComment);
      res.status(200).send(photoData);
    } else {
      res.status(404).send("no comment available");
    }
  },
  deleteComment: (req, res, next) => {
    const { id } = req.params;
    const { indexToDelete } = req.body;
    const index = photoData.findIndex(photo => {
      return photo.id === parseInt(id);
    });
    if (index !== -1) {
      photoData[index].comment.splice(indexToDelete, 1);
      res.status(200).send(photoData);
    } else {
      res.status(404).send("no comment available");
    }
  },
  editComment: (req, res, next) => {
    const { id } = req.params;
    const { indexToEdit, editComment } = req.body;
    const index = photoData.findIndex(photo => {
      return photo.id === parseInt(id);
    });
    if (index !== -1) {
      photoData[index].comment.splice(indexToEdit, 1, editComment);
      res.status(200).send(photoData);
    } else {
      res.status(404).send("no comment available");
    }
  }
};
