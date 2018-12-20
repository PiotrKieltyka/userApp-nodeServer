import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import keys from './config/keys';
import { allowCORS } from './middlewares/cors.middleware';
import { handleRoutes } from './routes';

const server = express();
const PORT = 3010;

mongoose.connect(`mongodb://${keys.mongoLogin}:${keys.mongoPasswd}@${keys.mongoUri}`, { useNewUrlParser: true },
    (err) => {
        err ? console.log('connection to mongoDB error: ', err.message) : console.log('successfully connected to mongoDB');
    });

server.use(bodyParser.json());
server.use(allowCORS);

handleRoutes(server);

server.listen(PORT, () => console.log(`Server is up and listening on port ${PORT}`));
