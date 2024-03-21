const baseDir = __dirname;

const Config = {
  PORT: 8080,
  BACKEND_DOMAIN: "http://localhost:8080",
  BASE_DIR: baseDir,
  FILE_LINK_EXPIRY_IN_MINUTES: 10, 
  CRYPTR_TOKEN: "fddffd",
};

module.exports = {
  Config,
};
