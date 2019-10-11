const express = require("express");
const app = express();

app.use(express.json());
const {
  getAllPhotos,
  getPhotoById,
  addComment,
  deleteComment,
  editComment
} = require("./controller/critiqueController");

app.get("/api/all_photos", getAllPhotos);
app.get("/api/photo/:id", getPhotoById);
app.post("/api/add_comment/:id", addComment);
app.put("/api/edit_comment/:id", editComment);
app.delete("/api/delete_comment/:id", deleteComment);

const port = 4073;
app.listen(port, () => console.log(`${port} port is listening`));
