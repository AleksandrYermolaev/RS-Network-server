import RequestError from '../helpers/requestError.js';
import LikesService from '../services/LikesService.js';

class LikesController {
  async likeOrUnlike(req, res) {
    try {
      const likes = await LikesService.likeOrUnlike(
        req.params.postId,
        req.body.userId
      );
      return res.json(likes);
    } catch (err) {
      if (err instanceof RequestError) {
        return res
          .status(err.status)
          .json({ name: err.name, message: err.message });
      }
      return res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new LikesController();
