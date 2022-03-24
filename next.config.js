/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["cdn.discordapp.com", "dummyimage.com"]
  },
  env: {
    API_URL: process.env.API_URL
  },
  async redirects() {
    return [
      {
        source: "/imagine-griefing",
        destination: "https://youtu.be/5R5LpLc315o",
        permanent: true
      },
      {
        source: "/markets",
        destination: "/market",
        permanent: true
      },
      {
        source: "/markets/login",
        destination: "/market/login",
        permanent: true
      }
    ];
  }
};
