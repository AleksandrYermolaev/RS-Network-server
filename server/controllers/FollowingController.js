import RequestError from '../helpers/requestError.js';
import FollowingService from '../services/FollowingService.js';

class FollowingController {
  async getFollowings(req, res) {
    try {
      const followings = await FollowingService.getFollowings(
        req.params.userId
      );
      res.json(followings);
    } catch (err) {
      if (err instanceof RequestError) {
        res.status(err.status).send(err.message);
      } else {
        res.status(500).send(`${err.name}: ${err.message}`);
      }
    }
  }
}

export default new FollowingController();
