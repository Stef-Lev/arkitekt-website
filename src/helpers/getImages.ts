import fs from 'fs';
import path from 'path';

type SubDir = 'albums' | 'singles';

export function getImages(subDir: SubDir) {
  const photosDir = path.join(process.cwd(), 'public', 'musicPage', subDir);
  const filenames = fs.readdirSync(photosDir);

  return filenames.map((filename) => `/musicPage/${subDir}/${filename}`);
}
