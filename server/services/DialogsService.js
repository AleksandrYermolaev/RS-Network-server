import RequestError from '../helpers/requestError.js';
import DialogModel from '../models/DialogModel.js';

class DialogService {
  async createDialog(senderId, receiverId) {
    if (!senderId || !receiverId) {
      throw new RequestError(400, 'Request body IDs are required!');
    }
    if (senderId.length !== 24 || receiverId.length !== 24) {
      throw new RequestError(400, 'Wrong body IDs format!');
    }
    const dialog = await DialogModel.create({
      members: [senderId, receiverId],
    });
    return dialog;
  }

  async getUserDialogs(userId) {
    if (!userId) {
      throw new RequestError(400, 'User ID are required!');
    }
    if (userId.length !== 24) {
      throw new RequestError(400, 'Wrong User ID format!');
    }
    const dialogs = await DialogModel.find({
      members: { $in: [userId] },
    });
    return dialogs;
  }

  async getDialogById(dialogId) {
    if (!dialogId) {
      throw new RequestError(400, 'Dialog ID are required!');
    }
    if (dialogId.length !== 24) {
      throw new RequestError(400, 'Wrong Dialog ID format!');
    }
    const dialog = await DialogModel.find({
      _id: dialogId,
    });
    return dialog;
  }
}

export default new DialogService();
