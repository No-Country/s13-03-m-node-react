import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from '../server/src/routers/index.js';

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.use('/api', router);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

