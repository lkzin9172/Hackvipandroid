const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Função para gerar um hash falso que muda sempre
function getFakeHash() {
  const chars = 'ABCDEF0123456789';
  let hash = '';
  for (let i = 0; i < 32; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

app.get('/api/v1/garena/verify', (req, res) => {
  const hash = getFakeHash();
  res.json({
    "status": "verified",
    "patch_version": "1.98.2",
    "integrity_hash": hash,
    "blacklist_check": "pass",
    "anti_tamper": "active",
    "class_scan": "clean",
    "device_id": "stabilized",
    "timestamp": Date.now()
  });
});

app.get('/', (req, res) => {
  res.send('Engine_V2_Live');
});

app.listen(port, () => {
  console.log('Engine V2 Ready');
});
