import { v4 as uuidv4 } from 'uuid';
import path from 'path';

class FileService {
  async upload(file) {
    try {
      const fileExt = file.name.split('.').at(-1);
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = path.resolve('static', fileName);
      await file.mv(filePath);
      return `${process.env.SERVER}/${fileName}`;
    } catch (error) {
      throw new ReferenceError(400, 'bad request');
    }
  }
}

export default new FileService();
