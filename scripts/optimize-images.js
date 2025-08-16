import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../src/assets/optimized');

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath, options = {}) {
  const {
    width = 800,
    height = 800,
    quality = 80,
    format = 'webp'
  } = options;

  try {
    await sharp(inputPath)
      .resize(width, height, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ quality })
      .toFile(outputPath);
    
    console.log(`✅ Otimizada: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${inputPath}:`, error);
  }
}

async function optimizeAllImages() {
  const files = fs.readdirSync(assetsDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  console.log('🔄 Otimizando imagens...');

  for (const file of imageFiles) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    await optimizeImage(inputPath, outputPath, {
      width: 800,
      height: 800,
      quality: 80
    });
  }

  console.log('✅ Todas as imagens foram otimizadas!');
}

optimizeAllImages();
