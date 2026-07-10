import fs from 'fs';
import path from 'path';
import https from 'https';

const transcriptPath = 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\b2951d36-f00a-48a2-bf80-31c9884edf06\\.system_generated\\logs\\transcript.jsonl';
const publicDir = 'c:\\Users\\User\\Desktop\\Rodstartechdevs\\public';

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  try {
    const content = fs.readFileSync(transcriptPath, 'utf8');
    const lines = content.trim().split('\n');
    
    // Search backwards for the user request containing base64 data
    let userText = '';
    for (let i = lines.length - 1; i >= 0; i--) {
      if (!lines[i]) continue;
      const step = JSON.parse(lines[i]);
      if (step.source === 'USER_EXPLICIT' && step.content.includes('data:image')) {
        userText = step.content;
        break;
      }
    }

    if (!userText) {
      console.log('No user message containing data:image found in transcript');
      return;
    }

    console.log('Found user message with length:', userText.length);

    // Let's parse the message content.
    // The message format:
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5DTrzaCjlDo7j1GEj3yqHa3wXIMAayjBRQ&s- extension cables,  data:image/jpeg;base64,/9j/... 8 port network switch, data:image/jpeg;base64,... gigabit switch, data:image/jpeg;base64,... cable ties"
    
    // Let's download the extension cables image first
    const extUrlMatch = userText.match(/(https:\/\/encrypted-tbn0\.gstatic\.com\/[^\s\-]+)/);
    if (extUrlMatch) {
      const extUrl = extUrlMatch[1];
      console.log('Downloading extension cables from:', extUrl);
      await downloadImage(extUrl, path.join(publicDir, 'power_extension.jpg'));
      console.log('Downloaded power_extension.jpg');
    }

    // Parse the base64 images
    // Format is "data:image/jpeg;base64,[base64_data] [product_name],"
    // Let's find all occurrences of data:image
    const matches = [...userText.matchAll(/data:image\/[^;]+;base64,([A-Za-z0-9+/=]+)\s*(?:-|–)?\s*([^,]+)/g)];
    
    console.log('Found base64 matches:', matches.length);

    for (const match of matches) {
      const base64Data = match[1];
      const name = match[2].trim().toLowerCase();
      
      let fileName = '';
      if (name.includes('8 port')) {
        fileName = 'network_switch.jpg';
      } else if (name.includes('gigabit')) {
        fileName = 'network_switch_giga.jpg';
      } else if (name.includes('cable ties')) {
        fileName = 'cable_ties.jpg';
      } else {
        fileName = name.replace(/[^a-z0-9]/g, '_') + '.jpg';
      }

      if (fileName) {
        console.log(`Decoding and saving base64 for "${name}" to "${fileName}"`);
        const buffer = Buffer.from(base64Data, 'base64');
        fs.writeFileSync(path.join(publicDir, fileName), buffer);
        console.log(`Saved ${fileName}`);
      }
    }
  } catch (err) {
    console.error('Error in script:', err);
  }
}

run();
