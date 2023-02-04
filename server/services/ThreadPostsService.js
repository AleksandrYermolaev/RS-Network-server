import PostModel from '../models/PostModel.js';
import UserModel from '../models/UserModel.js';

class ThreadPostsService {
  async getThreadPosts(userId) {
    if (!userId) {
      throw new Error('User ID param is required!');
    }
    if (userId.length !== 24) {
      throw new Error('Wrong user ID format!');
    }
    const allPosts = await PostModel.find();
    const { followers } = await UserModel.findById(userId);
    const threadPosts = allPosts.filter(
      (post) => post.userId === userId || followers.includes(post.userId)
    );
    return threadPosts;
  }
}

export default new ThreadPostsService();
