const Post = require("./Post");

const resolvers = {
  Query: {
    getAllPost: async () => {
      return await Post.find();
    },

    getSinglePost: async (parent, args, context, info) => {
      const { id } = args;
      const post = await Post.findOne({ _id: id });
      return post;
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = await new Post({ title, description }).save();
      return post;
    },

    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description } = args.post;

      const updatedPost = await Post.findByIdAndUpdate(
        { _id: id },
        { title, description },
        { new: true }
      );

      return updatedPost;
    },

    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete({ _id: id });
      return "Post deleted successfully";
    },
  },
};

module.exports = resolvers;
