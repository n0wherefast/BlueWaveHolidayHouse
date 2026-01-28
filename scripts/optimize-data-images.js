const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
(async ()=>{
  const root = path.resolve(__dirname, '..');
  const dataPath = path.join(root, 'app', 'api', 'places', 'data.json');
  const pub = path.join(root, 'public');
  const raw = fs.readFileSync(dataPath,'utf8');
  const data = JSON.parse(raw);
  for(const item of data){
    if(!item.image) continue;
    const src = item.image.replace(/^\//,'');
    const srcPath = path.join(pub, src);
    const ext = path.extname(srcPath);
    const base = path.basename(srcPath, ext);
    const outName = base + '.opt.webp';
    const outPath = path.join(pub, outName);
    if(fs.existsSync(outPath)){
      item.image = '/' + outName;
      console.log('exists, set', item.name, item.image);
      continue;
    }
    if(!fs.existsSync(srcPath)){
      console.warn('missing source', srcPath);
      continue;
    }
    try{
      await sharp(srcPath).resize({width:760}).webp({quality:75}).toFile(outPath);
      item.image = '/' + outName;
      console.log('optimized', src, '->', outName);
    }catch(e){
      console.error('err', src, e.message);
    }
  }
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2),'utf8');
  console.log('updated', dataPath);
})();
