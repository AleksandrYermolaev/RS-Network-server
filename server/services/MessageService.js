import RequestError from '../helpers/requestError.js';
import MessageModel from '../models/MessageModel.js';

class MessageService {
  async createMessage(dialogId, sender, text) {
    if (!dialogId || !sender) {
      throw new RequestError(400, 'Request body IDs are required!');
    }
    if (dialogId.length !== 24 || sender.length !== 24) {
      throw new RequestError(400, 'Wrong body IDs format!');
    }
    const message = await MessageModel.create({
      dialogId,
      sender,
      text,
    });
    return message;
  }

  async getMessages(dialogId) {
    if (!dialogId) {
      throw new RequestError(400, 'Dialog ID are required!');
    }
    if (dialogId.length !== 24) {
      throw new RequestError(400, 'Wrong Dialog ID format!');
    }
    const messages = await MessageModel.find({
      dialogId,
    });
    return messages;
  }
}

export default new MessageService();
