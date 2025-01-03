import { createServer } from 'http';
import { PORT } from './env.js';
import { base, listener } from './index.helpers.js';

const server = createServer(listener).listen(PORT, () => {
  console.log(`Listening on ${base}`);
});

export default server;