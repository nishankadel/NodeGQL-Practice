const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  // write schemas here
  title: {
    type: String,
  },

  description: {
    type: String,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
