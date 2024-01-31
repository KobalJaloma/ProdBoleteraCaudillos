import fs from "fs";


const route = 'C:/Users/Desarrollo/Pictures/wallpaperflare.com_wallpaper (2).jpg';

export const encodeBase64 = (route) => {
  const buffer = fs.readFileSync(route);
  const base64 = buffer.toString('base64');

  fs.writeFileSync('./base64.txt', base64);
  // console.log(base64);
  return base64;
}

encodeBase64(route);

export const decodeBase64 = () => {

}