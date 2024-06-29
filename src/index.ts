import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './controllers/userController.js';
import artistRouter from './controllers/artistController.js';
import trackRouter from './controllers/trackController.js';
import albumRouter from './controllers/albumController.js';
import favoritesRouter from './controllers/favoritesController.js';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/artists', artistRouter);
app.use('/tracks', trackRouter);
app.use('/albums', albumRouter);
app.use('/favorites', favoritesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
