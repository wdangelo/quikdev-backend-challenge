import express from 'express';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import { routes } from './routes';
import './database';
import 'reflect-metadata';

import swaggerFile from './swagger.json';

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes)

app.listen(3333, () => console.log("Server is runing"))