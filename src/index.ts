import 'reflect-metadata'; 
import express, { urlencoded } from 'express';
import './database/connect';

import routes from './routes';

const app = express();

//-> primeiro app.use(express.json()); depois app.use(routes); caso contrário nosso programa n conseguirá trabalhar com json
app.use(express.json());
app.use(routes);

app.listen(3000,()=> console.log('Server started at http://localhost:3000'));