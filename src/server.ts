import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import keys from './config/keys';
import { allowCORS } from './middlewares/cors.middleware';
import { handleRoutes } from './routes';

const server = express();
const PORT = 3010;

mongoose.connect(keys.mongoUri, { useNewUrlParser: true });

server.use(bodyParser.json());
server.use(allowCORS);

handleRoutes(server);

server.listen(PORT, () => console.log(`Server is up and listening on port ${PORT}`));
