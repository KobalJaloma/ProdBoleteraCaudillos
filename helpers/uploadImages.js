import multer from "multer";
import { createFolderIfNotExists } from "./directorios.js";

export const multerHelper = (fileRoute, fileName) => {
    
    createFolderIfNotExists(fileRoute);

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, fileRoute ?? './public/uploads');
        },
        filename: (req, file, cb) => {
            cb(null, fileName ?? Date.now() + '-' + file.originalname);
        }
    });
    
    const config = multer({
        storage, 
        limits: { fileSize: 10 * 1024 * 1024 }
    });

    return config.single('file');
}
