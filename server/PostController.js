import { posts } from "./mock-data.js";

class PostController {
  getPost(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'Post ID param is required!' })
    }
    const [post] = posts.filter((post) => post.id === Number(id));
    res.json(post);
  }
  create(req, res) {
    const post = req.body;
    posts.push(post);
    post.id = posts.indexOf(post) + 1;
    res.status(201).json(post);
  }
  update(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'Post ID param is required!' })
    }
    const [post] = posts.filter((post) => post.id === Number(id));
    const updatedPost = req.body;
    for (let key in updatedPost) {
      post[key] = updatedPost[key];
    }
    res.json(post);
  }
  delete(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'Post ID param is required!' })
    }
    const [post] = posts.filter((post) => post.id === Number(id));
    const postIndex = posts.indexOf(post);
    posts.splice(postIndex, 1);
    res.send(`post ${id} deleted`);
  }
}

export default new PostController();