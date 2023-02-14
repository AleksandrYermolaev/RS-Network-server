import RequestError from '../helpers/requestError.js';
import UserModel from '../models/UserModel.js';

class FollowingService {
  async getFollowings(userId) {
    if (!userId) {
      throw new RequestError(400, 'User ID param is required!');
    }
    if (userId.length !== 24) {
      throw new RequestError(400, 'Wrong user ID format!');
    }
    const allUsers = await UserModel.find();
    const followings = allUsers.filter((user) => user.followers.includes(userId));
    return followings;
  }
}

export default new FollowingService();
