const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const ffmpegPath = require('ffmpeg-static');
const inputPath = path.join(__dirname, '..', 'public', 'hero-video.mov');
const outputPath = path.join(__dirname, '..', 'public', 'hero-video.mp4');

if (!fs.existsSync(inputPath)) {
  console.error('Arquivo de entrada não encontrado:', inputPath);
  process.exit(1);
}

const proc = spawn(ffmpegPath, [
  '-i', inputPath,
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '23',
  '-c:a', 'aac',
  '-b:a', '128k',
  '-movflags', '+faststart',
  '-y',
  outputPath
], { stdio: 'inherit' });

proc.on('close', (code) => {
  if (code === 0) {
    console.log('Conversão concluída:', outputPath);
  } else {
    process.exit(code || 1);
  }
});
