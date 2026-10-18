const fs = require('fs');
const path = require('path');

console.log('🚀 Running Vercel build script...');

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

// 1. Ensure public directory exists
fs.mkdirSync('public', { recursive: true });

// 2. Sync critical static assets to public/
const filesToSync = [
  'index.html',
  'style.css',
  'script.js',
  'script_vercel.js',
  'logo_transparent.png',
  'logo.png',
  'favicon.png',
  'website_tree_database.json',
  'methodologies_data.json'
];

filesToSync.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join('public', file));
    console.log(`  ✓ Synced ${file} -> public/${file}`);
  }
});

// 3. Sync directories
copyFolderSync('assets', 'public/assets');
console.log('  ✓ Synced assets/ -> public/assets/');

if (fs.existsSync('images')) {
  copyFolderSync('images', 'public/images');
  console.log('  ✓ Synced images/ -> public/images/');
}

console.log('✅ Vercel build ready: All static files and image directories synchronized for deployment!');
