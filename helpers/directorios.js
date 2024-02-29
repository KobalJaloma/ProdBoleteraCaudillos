import fs from "fs";
import path from "path";

export const createFolderIfNotExists = (route) => {
    if(!route) return;

    if(!fs.existsSync(route))
        return fs.mkdirSync(route, { recursive: true });
}

export const createFolder = (route) => {
    fs.mkdirSync(route, { recursive: false });
}

export const changeFileName = (route, newFileName) => {
    fs.rename(route, newFileName, (err) => {
        return console.error('fallo de cambiar nombre', err);
    })
    console.log('se cambio el nombre correctamente');
}