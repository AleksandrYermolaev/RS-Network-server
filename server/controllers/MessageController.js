import RequestError from '../helpers/requestError.js';
import MessageService from '../services/MessageService.js';

class MessageController {
  async createMessage(req, res) {
    try {
      const message = await MessageService.createMessage(
        req.body.dialogId,
        req.body.sender,
        req.body.text
      );
      return res.json(message);
    } catch (err) {
      if (err instanceof RequestError) {
        return res
          .status(err.status)
          .json({ name: err.name, message: err.message });
      }
      return res.status(500).send(`${err.name}: ${err.message}`);
    }
  }

  async getMessages(req, res) {
    try {
      const messages = await MessageService.getMessages(req.params.dialogId);
      return res.json(messages);
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

export default new MessageController();
