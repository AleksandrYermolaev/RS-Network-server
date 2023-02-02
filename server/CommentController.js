import { comments, posts } from './mock-data.js';

class CommentController {
  getComment(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'Comment ID param is required!' });
    }
    const [requestedComment] = comments.filter(
      (comment) => comment.id === Number(id)
    );
    res.json(requestedComment);
  }

  create(req, res) {
    const comment = req.body;
    comments.push(comment);
    comment.id = comments.indexOf(comment) + 1;
    const [commentedPost] = posts.filter((post) => post.id === comment.postId);
    commentedPost.comments.push(comment.id);
    res.status(201).json(comment);
  }

  update(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'Comment ID param is required!' });
    }
    const [requestedComment] = comments.filter(
      (comment) => comment.id === Number(id)
    );
    const updatedPost = req.body;
    for (const key in updatedPost) {
      requestedComment[key] = updatedPost[key];
    }
    res.json(requestedComment);
  }

  delete(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'Comment ID param is required!' });
    }
    const [requestedComment] = comments.filter(
      (comment) => comment.id === Number(id)
    );
    const commentIndex = comments.indexOf(requestedComment);
    comments.splice(commentIndex, 1);
    const [commentedPost] = posts.filter(
      (post) => post.id === requestedComment.postId
    );
    const commentPostIndex = commentedPost.comments.indexOf(requestedComment);
    commentedPost.comments.splice(commentPostIndex, 1);
    res.send(`post ${id} deleted`);
  }

  getPostComments(req, res) {
    const { postId } = req.params;
    if (!postId) {
      res.status(400).json({ message: 'Post ID param is required!' });
    }
    const [requestedPost] = posts.filter((post) => post.id === Number(postId));
    const postComments = requestedPost.comments.map((commentId) => {
      const [postComment] = comments.filter(
        (comment) => comment.id === commentId
      );
      return postComment;
    });
    res.json(postComments);
  }
}

export default new CommentController();
