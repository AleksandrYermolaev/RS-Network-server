import PostService from '../services/PostService.js';

class PostController {
  async getPost(req, res) {
    try {
      const post = await PostService.getPost(req.params.id);
      res.json(post);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async create(req, res) {
    try {
      const createdPost = await PostService.create(req.body);
      res.status(201).json(createdPost);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.params.id, req.body);
      res.json(updatedPost);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async delete(req, res) {
    try {
      const deletedPost = await PostService.delete(req.params.id);
      res.json(deletedPost);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new PostController();
