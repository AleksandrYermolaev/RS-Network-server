import CommentModel from '../models/CommentModel.js';
import PostModel from '../models/PostModel.js';

class CommentController {
  async getComment(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res
          .status(400)
          .json({ message: 'Comment ID is required param: /comment/:id' });
      }
      if (id.length !== 24) {
        res.status(400).json({ message: 'Wrong comment ID format!' });
      }
      const comment = await CommentModel.findById(id);
      res.json(comment);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async create(req, res) {
    try {
      const comment = req.body;
      const createdComment = await CommentModel.create({ ...comment });
      const commentedPost = await PostModel.findById(comment.postId);
      commentedPost.comments.push(createdComment.id);
      await PostModel.findByIdAndUpdate(comment.postId, commentedPost);
      res.status(201).json(createdComment);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res
          .status(400)
          .json({ message: 'Comment ID is required param: /comment/:id' });
      }
      if (id.length !== 24) {
        res.status(400).json({ message: 'Wrong comment ID format!' });
      }
      const comment = req.body;
      const updatedComment = await CommentModel.findByIdAndUpdate(id, comment, {
        new: true,
      });
      res.json(updatedComment);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res
          .status(400)
          .json({ message: 'Comment ID is required param: /comment/:id' });
      }
      if (id.length !== 24) {
        res.status(400).json({ message: 'Wrong coment ID format!' });
      }
      const deletedComment = await CommentModel.findByIdAndDelete(id);
      const commentedPost = await PostModel.findById(deletedComment.postId);
      const deletedCommentIndex = commentedPost.comments.indexOf(
        deletedComment.id
      );
      commentedPost.comments.splice(deletedCommentIndex, 1);
      await PostModel.findByIdAndUpdate(deletedComment.postId, commentedPost);
      res.json(deletedComment);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async getPostComments(req, res) {
    try {
      const { postId } = req.params;
      if (!postId) {
        res.status(400).json({ message: 'Post ID param is required!' });
      }
      if (postId.length !== 24) {
        res.status(400).json({ message: 'Wrong post ID format!' });
      }
      const commentedPost = await PostModel.findById(postId);
      const commentsPromises = commentedPost.comments.map(async (commentId) =>
        CommentModel.findById(commentId)
      );
      const comments = await Promise.all(commentsPromises);
      res.json(comments);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new CommentController();
