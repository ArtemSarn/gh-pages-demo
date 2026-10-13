const fs = require('fs');
const getDb = require('../db');

const db = getDb();

fs.mkdirSync('./build/static/db', { recursive: true });

for (const [key, value] of Object.entries(db)) {
  fs.writeFileSync(`./build/static/db/${key}.json`, JSON.stringify(value));
}