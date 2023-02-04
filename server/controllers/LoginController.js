import RequestError from '../helpers/requestError.js';
import LoginService from '../services/LoginService.js';

class LoginController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const loginData = await LoginService.login(email, password);
      return res.json(loginData);
    } catch (err) {
      if (err instanceof RequestError) {
        return res
          .status(err.status)
          .json({ name: err.name, message: err.message });
      }
      return res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async getPermission(req, res) {
    try {
      const access = await LoginService.getPermission(req.user.id);
      return res.status(200).json(access);
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

export default new LoginController();
