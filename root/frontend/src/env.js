const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '.env');
const envExists = fs.existsSync(envPath);

if (envExists) {
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}