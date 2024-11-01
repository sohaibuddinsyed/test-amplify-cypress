import globby from 'globby';
import path from 'path';
import fs from 'fs';

async function processFiles() {
  try {
    const args = process.argv.slice(2);
    const cwd = args[0];
    const globs = ['root/.cache/Cypress'];
    
    console.log('# Creating cache artifact...');
    
    const matches = globby.stream(globs, {
      dot: true,
      cwd: cwd,
      deep: 20,
    });

    for await (const match of matches) {
      const name = match.toString();
      const filePath = path.join(cwd, name);
      console.log(filePath);

      const stats = fs.lstatSync(filePath);
      console.log(stats.isFile);
    }

    console.log('')
    console.log('Processing complete.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

processFiles();
