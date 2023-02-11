import RequestError from '../helpers/requestError.js';
import FileService from '../services/FileService.js';

class FileController {
  async upload(req, res) {
    try {
      const fileLink = await FileService.upload(req.files.image);
      return res.status(201).json({ imageUrl: fileLink });
    } catch (err) {
      if (err instanceof RequestError) {
        return res.status(err.status).send(err.message);
      }
      return res.status(500).send('File uploading server error!');
    }
  }
}

export default new FileController();
