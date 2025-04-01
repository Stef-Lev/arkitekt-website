import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', '/musicPage/singles');

async function shuffleAndRenameImages() {
  try {
    let files = await fs.readdir(filePath);
    files = files.filter((file) => /^\d{3}_.*\.jpg$/i.test(file));
    files.sort(() => Math.random() - 0.5);

    for (let i = 0; i < files.length; i++) {
      const oldFile = files[i];
      const newNumber = String(i + 1).padStart(3, '0');
      const newFile = oldFile.replace(/^\d{3}_/, `${newNumber}_`);

      await fs.rename(
        path.join(filePath, oldFile),
        path.join(filePath, newFile),
      );
      console.log(`Renamed: ${oldFile} -> ${newFile}`);
    }
    console.log('Renaming complete.');
  } catch (error) {
    console.log({ error });
  }
}

shuffleAndRenameImages();
