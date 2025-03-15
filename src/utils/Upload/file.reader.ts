import fileReader from "./config/multer.uploader.js";

class FileReader {
  static instance: FileReader;
  private constructor() {}

  public static get getInstance() {
    if (!this.instance) {
      this.instance = new FileReader();
      return this.instance;
    } else {
      return this.instance;
    }
  }
  public fileReader = fileReader;
}

export default FileReader.getInstance;
