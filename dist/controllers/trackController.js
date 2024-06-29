import express from 'express';
import { getTracks, getTrackById, addTrack, updateTrack, deleteTrack } from '../services/trackService.js';
import { cleanUpFavorites } from '../services/favoritesService.js';
const router = express.Router();
router.get('/', (req, res) => {
    res.json(getTracks());
});
router.get('/:id', (req, res) => {
    const track = getTrackById(req.params.id);
    if (track) {
        res.json(track);
    }
    else {
        res.status(404).send('Track not found');
    }
});
router.post('/', (req, res) => {
    const { name, artistId, albumId, duration } = req.body;
    const track = addTrack(name, artistId, albumId, duration);
    res.status(201).json(track);
});
router.put('/:id', (req, res) => {
    const { name, artistId, albumId, duration } = req.body;
    const track = updateTrack(req.params.id, name, artistId, albumId, duration);
    if (track) {
        res.json(track);
    }
    else {
        res.status(404).send('Track not found');
    }
});
router.delete('/:id', (req, res) => {
    const success = deleteTrack(req.params.id);
    if (success) {
        cleanUpFavorites(req.params.id);
        res.status(204).send();
    }
    else {
        res.status(404).send('Track not found');
    }
});
export default router;
