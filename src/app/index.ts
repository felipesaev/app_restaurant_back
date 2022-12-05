import express, { Router } from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();
        const PORT = 3001;
        app.use(express.json());
        app.use(router);

        app.listen(PORT, () => {
            console.log(`🐱‍🏍 Server running on http://localhost:${PORT}`);
        });
    }).catch((err) => console.log('erro', err));


