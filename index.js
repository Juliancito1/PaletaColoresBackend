import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import './src/database/dbConnection'
import coloresRouter from './src/routes/colores.routes'
dotenv.config();

const app = express();

app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto " + app.get("port"));
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

app.use("/apicolores",coloresRouter)