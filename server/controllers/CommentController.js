import CommentService from '../services/CommentService.js';

class CommentController {
  async getComment(req, res) {
    try {
      const comment = await CommentService.getComment(req.params.id);
      res.json(comment);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async create(req, res) {
    try {
      const createdComment = await CommentService.create(req.body);
      res.status(201).json(createdComment);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async update(req, res) {
    try {
      const updatedComment = await CommentService.update(
        req.params.id,
        req.body
      );
      res.json(updatedComment);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async delete(req, res) {
    try {
      const deletedComment = await CommentService.delete(req.params.id);
      res.json(deletedComment);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async getPostComments(req, res) {
    try {
      const comments = await CommentService.getPostComments(req.params.postId);
      res.json(comments);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new CommentController();
