const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'public')
const dataPath = path.join(root, 'app', 'api', 'places', 'data.json')
const thumbsDir = path.join(publicDir, '_thumbs')

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function toFilename(p) {
  return path.basename(p).replace(/\.[^.]+$/, '')
}

async function process() {
  await ensureDir(thumbsDir)
  const raw = fs.readFileSync(dataPath, 'utf8')
  const data = JSON.parse(raw)

  for (const item of data) {
    if (!item.image) continue
    const imgPath = path.join(publicDir, item.image.replace(/^\//, ''))
    if (!fs.existsSync(imgPath)) {
      console.warn('Image not found, skipping:', imgPath)
      continue
    }

    const name = toFilename(item.image)
    const thumbFile = `/${path.posix.join('_thumbs', `${name}-thumb.webp`)}`
    const outPath = path.join(thumbsDir, `${name}-thumb.webp`)

    try {
      // write a small webp thumbnail
      await sharp(imgPath)
        .resize(320)
        .webp({ quality: 70 })
        .toFile(outPath)

      // create tiny placeholder for blurDataURL
      const tinyBuffer = await sharp(imgPath)
        .resize(20)
        .blur()
        .webp({ quality: 50 })
        .toBuffer()

      const base64 = `data:image/webp;base64,${tinyBuffer.toString('base64')}`

      item.thumbnail = thumbFile
      item.blurDataURL = base64

      console.log('Processed', item.name)
    } catch (err) {
      console.error('Error processing', item.image, err)
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8')
  console.log('Updated', dataPath)
}

process().catch((e) => { console.error(e); process.exit(1) })
