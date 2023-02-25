import bcrypt,{genSaltSync, hashSync} from "bcrypt";
const saltRounds = 10;


export const encriptarPassword = (password) => {
    const salt = genSaltSync(saltRounds);
    const hash = hashSync(password, salt);
    return hash;
};

export const evaluarEncriptacion = (password, hash) => {
    const match = bcrypt.compareSync(password, hash);

    return match;
}

