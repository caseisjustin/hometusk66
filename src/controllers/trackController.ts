import express, { Request, Response } from 'express';
import { getTracks, getTrackById, addTrack, updateTrack, deleteTrack } from '../services/trackService.js';
import { cleanUpFavorites } from '../services/favoritesService.js';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json(getTracks());
});

router.get('/:id', (req: Request, res: Response) => {
  const track = getTrackById(req.params.id);
  if (track) {
    res.json(track);
  } else {
    res.status(404).send('Track not found');
  }
});

router.post('/', (req: Request, res: Response) => {
  const { name, artistId, albumId, duration } = req.body;
  const track = addTrack(name, artistId, albumId, duration);
  res.status(201).json(track);
});

router.put('/:id', (req: Request, res: Response) => {
  const { name, artistId, albumId, duration } = req.body;
  const track = updateTrack(req.params.id, name, artistId, albumId, duration);
  if (track) {
    res.json(track);
  } else {
    res.status(404).send('Track not found');
  }
});

router.delete('/:id', (req: Request, res: Response) => {
  const success = deleteTrack(req.params.id);
  if (success) {
    cleanUpFavorites(req.params.id);
    res.status(204).send();
  } else {
    res.status(404).send('Track not found');
  }
});

export default router;