import ThreadPostsService from '../services/ThreadPostsService.js';

class ThreadPostsController {
  async getThreadPosts(req, res) {
    try {
      const threadPosts = await ThreadPostsService.getThreadPosts(
        req.params.userId
      );
      res.json(threadPosts);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new ThreadPostsController();
