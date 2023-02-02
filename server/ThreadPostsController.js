import { posts, users } from './mock-data.js';

class ThreadPostsController {
  getThreadPosts(req, res) {
    const { userId } = req.params;
    if (!userId) {
      res.status(400).json({ message: 'User ID param is required!' });
    }
    const [requestedUser] = users.filter((user) => user.id === Number(userId));
    const userPosts = posts.filter((post) => post.userId === Number(userId));
    const followersPosts = [];
    requestedUser.followers.map((followerId) => {
      const followerPosts = posts.filter((post) => post.userId === followerId);
      return followersPosts.push(...followerPosts);
    });
    const threadPosts = [...userPosts, ...followersPosts];
    threadPosts.sort((a, b) => a.date - b.date);
    res.json(threadPosts);
  }
}

export default new ThreadPostsController();
