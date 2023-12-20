import { cwd } from 'process';
import { readdirSync } from 'fs';

const __root = cwd();

export async function load() {
  const directoryPath = `${__root}/content/challenge`;

  const filenames = readdirSync(directoryPath).map(filename => filename.replace(/\.[^/.]+$/, ''));

  console.log(filenames);

  return {
    challenges: filenames // Replace with parsed date
  };
}
