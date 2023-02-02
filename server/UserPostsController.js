import { posts } from './mock-data.js';

class UserPostsController {
  getUserPosts(req, res) {
    const { userId } = req.params;
    if (!userId) {
      res.status(400).json({ message: 'User ID param is required!' });
    }
    const userPosts = posts.filter((post) => post.userId === Number(userId));
    res.json(userPosts);
  }
}

export default new UserPostsController();
