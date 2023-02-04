import PostModel from '../models/PostModel.js';

class UserPostsService {
  async getUserPosts(userId) {
    if (!userId) {
      throw new Error('User ID param is required!');
    }
    if (userId.length !== 24) {
      throw new Error('Wrong user ID format!');
    }
    const posts = await PostModel.find();
    const userPosts = posts.filter((post) => post.userId === userId);
    return userPosts;
  }
}

export default new UserPostsService();
