import PostModel from '../models/PostModel.js';

class PostService {
  async getPost(id) {
    if (!id) {
      throw new Error('Post ID is required param: /posts/:id');
    }
    if (id.length !== 24) {
      throw new Error('Wrong post ID format!');
    }
    const post = await PostModel.findById(id);
    return post;
  }

  async create(post) {
    const createdPost = await PostModel.create({ ...post });
    return createdPost;
  }

  async update(id, post) {
    if (!id) {
      throw new Error('Post ID is required param: /posts/:id');
    }
    if (id.length !== 24) {
      throw new Error('Wrong post ID format!');
    }
    const updatedPost = await PostModel.findByIdAndUpdate(id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('Post ID is required param: /posts/:id');
    }
    if (id.length !== 24) {
      throw new Error('Wrong post ID format!');
    }
    const deletedPost = await PostModel.findByIdAndDelete(id);
    return deletedPost;
  }
}

export default new PostService();
