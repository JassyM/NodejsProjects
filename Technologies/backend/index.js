const server = require('./server');
const { PORT } = require('./config');

server.listen(PORT, () => {
  console.log(`Technologies backend running on port ${PORT}`);
});