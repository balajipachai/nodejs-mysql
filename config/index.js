const config = {
  mysql: {
    type: 'tcp',
    port: '3306',
    host: 'localhost',
    protocol: 'http',
    timeout: '180000',
    database: 'dbname',
    user: 'dbuser',
    password: 'dbpassword',
  },
};

module.exports = config;
