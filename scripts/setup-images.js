const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const pub = path.join(root, 'public')
const pubTattoo = path.join(pub, 'tattoo')

if (!fs.existsSync(pub)) fs.mkdirSync(pub)
if (!fs.existsSync(pubTattoo)) fs.mkdirSync(pubTattoo)

const copies = [
  ['image1.jpg', 'public/image1.jpg'],
  ['image2.jpeg', 'public/image2.jpeg'],
]

for (const [src, dest] of copies) {
  const srcPath = path.join(root, src)
  const destPath = path.join(root, dest)
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath)
    console.log(`✔ Copied ${src}`)
  } else {
    console.warn(`⚠  Not found: ${src}`)
  }
}

const tattooDir = path.join(root, 'tattoo')
if (fs.existsSync(tattooDir)) {
  const files = fs.readdirSync(tattooDir)
  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      fs.copyFileSync(path.join(tattooDir, file), path.join(pubTattoo, file))
      console.log(`✔ Copied tattoo/${file}`)
    }
  }
}

console.log('\n✅ Setup complete — images are in public/')
