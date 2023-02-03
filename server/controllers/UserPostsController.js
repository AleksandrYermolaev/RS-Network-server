import PostModel from '../models/PostModel.js';

class UserPostsController {
  async getUserPosts(req, res) {
    try {
      const { userId } = req.params;
      if (!userId) {
        res.status(400).json({ message: 'User ID param is required!' });
      }
      if (userId.length !== 24) {
        res.status(400).json({ message: 'Wrong user ID format!' });
      }
      const posts = await PostModel.find();
      const userPosts = posts.filter((post) => post.userId === userId)
      res.json(userPosts);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new UserPostsController();
