import PostModel from '../models/PostModel.js';

class PostController {
  async getPost(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res
          .status(400)
          .json({ message: 'Post ID is required param: /posts/:id' });
      }
      if (id.length !== 24) {
        res.status(400).json({ message: 'Wrong post ID format!' });
      }
      const post = await PostModel.findById(id);
      res.json(post);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async create(req, res) {
    try {
      const post = req.body;
      const createdPost = await PostModel.create({ ...post });
      res.status(201).json(createdPost);
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
          .json({ message: 'Post ID is required param: /users/:id' });
      }
      if (id.length !== 24) {
        res.status(400).json({ message: 'Wrong post ID format!' });
      }
      const post = req.body;
      const updatedPost = await PostModel.findByIdAndUpdate(id, post, {
        new: true,
      });
      res.json(updatedPost);
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
          .json({ message: 'Post ID is required param: /users/:id' });
      }
      if (id.length !== 24) {
        res.status(400).json({ message: 'Wrong post ID format!' });
      }
      const deletedPost = await PostModel.findByIdAndDelete(id);
      res.json(deletedPost);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new PostController();
