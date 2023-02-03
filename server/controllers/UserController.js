import UserModel from '../models/UserModel.js';

class UserController {
  async getAll(req, res) {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async getUser(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'User ID is required param: /users/:id' })
      }
      if (id.length !== 24) {
        res.status(400).json({ message: 'Wrong user ID format!' });
      }
      const user = await UserModel.findById(id);
      res.json(user);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async create(req, res) {
    try {
      const user = req.body;
      const createdUser = await UserModel.create({ ...user });
      res.status(201).json(createdUser);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'User ID is required param: /users/:id' })
      }
      if (id.length !== 24) {
        res.status(400).json({ message: 'Wrong user ID format!' });
      }
      const user = req.body
      const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });
      res.json(updatedUser);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'User ID is required param: /users/:id' })
      }
      if (id.length !== 24) {
        res.status(400).json({ message: 'Wrong user ID format!' });
      }
      const deletedUser = await UserModel.findByIdAndDelete(id)
      res.json(deletedUser);
    } catch (err) {
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  }
}

export default new UserController();
