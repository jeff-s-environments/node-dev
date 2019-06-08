import express, { Express, Response, Request } from 'express';
import mongoose, { Connection } from 'mongoose';

mongoose.connect('mongodb://db/test', { useNewUrlParser: true });
const db: Connection = mongoose.connection;

db.on('error', () => console.error('Connection Error'));
db.on('open', () => console.log('Connected!!'));

const app: Express = express();
const port: number = 9271;

app.get('/', (req: Request, res: Response) => res.send('Hello World'));

app.listen(port, () => console.log(`http://localhost:${port}`));
