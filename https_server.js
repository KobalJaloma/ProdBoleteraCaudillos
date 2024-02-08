import { createServer } from 'https';
import { readFileSync } from 'fs';

const PUERTOHTTPS = 443;

var https_options = {
     key: readFileSync(),
     cert: readFileSync(),
     ca: [
        readFileSync(),
        readFileSync()
     ]
};

createServer(https_options, function() {
    res.end("Esta ejecutando en el puerto 443");
}).listen(PUERTOHTTPS);

//EL PUERTO SSL ES EN 443