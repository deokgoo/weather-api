import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import apiController from './controllers/apiController';

const PORT = 80;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));

app.use('/api', apiController);

app.listen(process.env.PORT || PORT, () => console.log(chalk.whiteBright.bgBlue(`Example app listening on port ${PORT}!`)));
