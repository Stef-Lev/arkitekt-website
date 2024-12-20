import fs from 'fs';
import path from 'path';

export function getImages(dir: string, subDir: string) {
  const baseDir = path.join(process.cwd(), 'public', dir);
  const photosDir = subDir ? path.join(baseDir, subDir) : baseDir;

  if (!fs.existsSync(photosDir)) {
    console.warn(`Directory does not exist: ${photosDir}`);
    return [];
  }

  const filenames = fs.readdirSync(photosDir);

  return filenames.map((filename) =>
    subDir ? `/${dir}/${subDir}/${filename}` : `/${dir}/${filename}`,
  );
}
