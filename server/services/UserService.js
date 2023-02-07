import bcrypt from 'bcrypt';
import isEmailValid from '../helpers/isEmailValid.js';
import isPasswordValid from '../helpers/isPaswordValid.js';
import RequestError from '../helpers/requestError.js';
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
    const { name, email, password, repeatedPassword } = user;
    if (!isEmailValid(email)) {
      throw new RequestError(400, 'Email is invalid!');
    }
    const isEmailTaken = await UserModel.findOne({ email });
    if (isEmailTaken) {
      throw new RequestError(400, 'Email is already taken!');
    }
    if (password.length < 6) {
      throw new RequestError(
        400,
        'Password should be at least 6 characters long!'
      );
    }
    if (!isPasswordValid(password, repeatedPassword)) {
      throw new RequestError(400, 'Password and repeated password mismatch!');
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    const createdUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
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
