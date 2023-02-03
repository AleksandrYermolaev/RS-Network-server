import CommentModel from '../models/CommentModel.js';
import PostModel from '../models/PostModel.js';

class CommentService {
  async getComment(id) {
    if (!id) {
      throw new Error('Comment ID is required param: /comment/:id');
    }
    if (id.length !== 24) {
      throw new Error('Wrong comment ID format!');
    }
    const comment = await CommentModel.findById(id);
    return comment;
  }

  async create(comment) {
    const createdComment = await CommentModel.create({ ...comment });
    const commentedPost = await PostModel.findById(comment.postId);
    commentedPost.comments.push(createdComment.id);
    await PostModel.findByIdAndUpdate(comment.postId, commentedPost);
    return createdComment;
  }

  async update(id, comment) {
    if (!id) {
      throw new Error('Comment ID is required param: /comment/:id');
    }
    if (id.length !== 24) {
      throw new Error('Wrong comment ID format!');
    }
    const updatedComment = await CommentModel.findByIdAndUpdate(id, comment, {
      new: true,
    });
    return updatedComment;
  }

  async delete(id) {
    if (!id) {
      throw new Error('Comment ID is required param: /comment/:id');
    }
    if (id.length !== 24) {
      throw new Error('Wrong comment ID format!');
    }
    const deletedComment = await CommentModel.findByIdAndDelete(id);
    const commentedPost = await PostModel.findById(deletedComment.postId);
    const deletedCommentIndex = commentedPost.comments.indexOf(
      deletedComment.id
    );
    commentedPost.comments.splice(deletedCommentIndex, 1);
    await PostModel.findByIdAndUpdate(deletedComment.postId, commentedPost);
    return deletedComment;
  }

  async getPostComments(postId) {
    if (!postId) {
      throw new Error('Comment ID is required param: /comment/:id');
    }
    if (postId.length !== 24) {
      throw new Error('Wrong comment ID format!');
    }
    const commentedPost = await PostModel.findById(postId);
    const commentsPromises = commentedPost.comments.map(async (commentId) =>
      CommentModel.findById(commentId)
    );
    const comments = await Promise.all(commentsPromises);
    return comments;
  }
}

export default new CommentService();
