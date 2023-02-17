import RequestError from '../helpers/requestError.js';
import DialogsService from '../services/DialogsService.js';

class DialogsController {
  async createDialog(req, res) {
    try {
      const dialog = await DialogsService.createDialog(
        req.body.senderId,
        req.body.receiverId,
      );
      return res.json(dialog);
    } catch (err) {
      if (err instanceof RequestError) {
        return res
          .status(err.status)
          .json({ name: err.name, message: err.message });
      }
      return res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async getUserDialogs(req, res) {
    try {
      const dialogs = await DialogsService.getUserDialogs(
        req.params.userId,
      );
      return res.json(dialogs);
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

export default new DialogsController();
