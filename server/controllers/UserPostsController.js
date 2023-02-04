import UserPostsService from '../services/UserPostsService.js';

class UserPostsController {
  async getUserPosts(req, res) {
    try {
      const userPosts = await UserPostsService.getUserPosts(req.params.userId);
      res.json(userPosts);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new UserPostsController();
