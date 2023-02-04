import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import RequestError from '../helpers/requestError.js';
import UserModel from '../models/UserModel.js';

class LoginService {
  async login(email, password) {
    const loginCandidate = await UserModel.findOne({ email });
    if (!loginCandidate) {
      throw new RequestError(400, 'User with this email do not exists!');
    }
    const isValidPassword = await bcrypt.compare(
      password,
      loginCandidate.password
    );
    if (!isValidPassword) {
      throw new RequestError(400, 'Wrong password!');
    }
    const token = jwt.sign({ id: loginCandidate.id }, process.env.JWT, {
      expiresIn: '7d',
    });
    return {
      token,
      user: loginCandidate,
    };
  }
}

export default new LoginService();
