import UserModel from '../models/UserModel.js';

class UserService {
  async getAll() {
    const users = await UserModel.find();
    return users;
  }

  async getUser(id) {
    if (!id) {
      throw new Error('User ID is required param: /users/:id');
    }
    if (id.length !== 24) {
      throw new Error('Wrong user ID format!');
    }
    const user = await UserModel.findById(id);
    return user;
  }

  async create(user) {
    const createdUser = await UserModel.create({ ...user });
    return createdUser;
  }

  async update(id, user) {
    if (!id) {
      throw new Error('User ID is required param: /users/:id');
    }
    if (id.length !== 24) {
      throw new Error('Wrong user ID format!');
    }
    const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
      new: true,
    });
    return updatedUser;
  }

  async delete(id) {
    if (!id) {
      throw new Error('User ID is required param: /users/:id');
    }
    if (id.length !== 24) {
      throw new Error('Wrong user ID format!');
    }
    const deletedUser = await UserModel.findByIdAndDelete(id);
    return deletedUser;
  }
}

export default new UserService();
