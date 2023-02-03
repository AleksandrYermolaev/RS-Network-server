import PostModel from '../models/PostModel.js';
import UserModel from '../models/UserModel.js';

class ThreadPostsController {
  async getThreadPosts(req, res) {
    try {
      const { userId } = req.params;
      if (!userId) {
        res.status(400).json({ message: 'User ID param is required!' });
      }
      if (userId.length !== 24) {
        res.status(400).json({ message: 'Wrong user ID format!' });
      }
      const allPosts = await PostModel.find();
      const { followers } = await UserModel.findById(userId);
      const threadPosts = allPosts.filter(
        (post) => post.userId === userId || followers.includes(post.userId)
      );
      res.json(threadPosts);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new ThreadPostsController();
