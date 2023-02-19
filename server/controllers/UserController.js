import RequestError from '../helpers/requestError.js';
import UserService from '../services/UserService.js';

class UserController {
  async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      res.json(users);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async getUser(req, res) {
    try {
      const user = await UserService.getUser(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async create(req, res) {
    try {
      const createdUser = await UserService.create(req.body);
      return res.status(201).json(createdUser);
    } catch (err) {
      if (err instanceof RequestError) {
        return res.status(err.status).send(`${err.message}`);
      }
      return res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async update(req, res) {
    try {
      const updatedUser = await UserService.update(req.params.id, req.body);
      res.json(updatedUser);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async delete(req, res) {
    try {
      const deletedUser = await UserService.delete(req.params.id);
      res.json(deletedUser);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async userRemove(req, res) {
    try {
      await UserService.userRemove(req.params.id);
      res.json({ message: 'your profile deleted!' });
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new UserController();
