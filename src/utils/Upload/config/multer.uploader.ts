import { Request } from "express";
import multer, { FileFilterCallback } from "multer";

const fileReader = ({ allowedFiles }: { allowedFiles: string[] }) => {
  const storage = multer.diskStorage({});

  const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ): void => {
    if (!allowedFiles.includes(file.mimetype))
      return cb(
        new Error(`Unknown File Type: ${file.originalname}`, { cause: 400 })
      );
    return cb(null, true);
  };

  return multer({ dest: "uploads", fileFilter, storage });
};

export default fileReader;
