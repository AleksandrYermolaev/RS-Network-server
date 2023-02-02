import { users } from "./mock-data.js";

class UserController {
  getAll(req, res) {
    res.json(users);
  }

  getUser(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'User ID param is required!' })
    }
    const [user] = users.filter((user) => user.id === Number(id));
    res.json(user);
  }

  create(req, res) {
    const user = req.body;
    users.push(user);
    user.id = users.indexOf(user) + 1;
    res.status(201).json(user);
  }

  update(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'User ID param is required!' })
    }
    const [user] = users.filter((user) => user.id === Number(id));
    const updatedUser = req.body;
    for (let key in updatedUser) {
      user[key] = updatedUser[key];
    }
    res.json(user);
  }

  delete(req, res) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'User ID param is required!' })
    }
    const [user] = users.filter((user) => user.id === Number(id));
    const userIndex = users.indexOf(user);
    users.splice(userIndex, 1);
    res.send(`user ${id} deleted`);
  }
}

export default new UserController();