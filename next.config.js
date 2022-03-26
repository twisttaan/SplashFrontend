/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  images: {
    domains: ["cdn.discordapp.com", "dummyimage.com"]
  },
  env: {
    API_URL: process.env.API_URL
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
};
