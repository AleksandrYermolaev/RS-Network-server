import RequestError from '../helpers/requestError.js';
import PostModel from '../models/PostModel.js';

class LikesService {
  async likeOrUnlike(postId, userId) {
    if (!postId) {
      throw new RequestError(400, 'Post ID is required param: /likes/:postId');
    }
    if (postId.length !== 24) {
      throw new RequestError(400, 'Wrong post ID format!');
    }
    if (!userId) {
      throw new RequestError(400, 'User ID is not provided in request body!');
    }
    if (userId.length !== 24) {
      throw new RequestError(400, 'Wrong user ID format!');
    }
    const post = await PostModel.findById(postId);
    const userIndex = post.likes.indexOf(userId);
    if (userIndex === -1) {
      post.likes.push(userId);
    } else {
      post.likes.splice(userId, 1);
    }
    await PostModel.findByIdAndUpdate(postId, post);
    return post.likes;
  }
}

export default new LikesService();
