module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://localhost/novelistdb',
  secret: process.env.SECRET || 'novelists super secrets'
};
