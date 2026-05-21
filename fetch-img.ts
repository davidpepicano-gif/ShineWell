import https from 'https';
import fs from 'fs';
import path from 'path';

// Direct url we found: https://i.ibb.co/s9BnKg2h/download.jpg
const imageUrl = 'https://i.ibb.co/s9BnKg2h/download.jpg';
const outputPath = path.join(process.cwd(), 'public', 'logo.png');

console.log('Starting download of logo...');

const file = fs.createWriteStream(outputPath);

https.get(imageUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to get image, status code: ${response.statusCode}`);
    return;
  }
  
  response.pipe(file);
  
  file.on('finish', () => {
    file.close();
    console.log('Logo downloaded successfully to public/logo.png');
  });
}).on('error', (err) => {
  fs.unlink(outputPath, () => {});
  console.error(`Error downloading: ${err.message}`);
});

