import express from 'express';
import { getArtists, getArtistById, addArtist, updateArtist, deleteArtist } from '../services/artistService.js';
import { cleanUpFavorites } from '../services/favoritesService.js';
const router = express.Router();
router.get('/', (req, res) => {
    res.json(getArtists());
});
router.get('/:id', (req, res) => {
    const artist = getArtistById(req.params.id);
    if (artist) {
        res.json(artist);
    }
    else {
        res.status(404).send('Artist not found');
    }
});
router.post('/', (req, res) => {
    const { name, grammy } = req.body;
    const artist = addArtist(name, grammy);
    res.status(201).json(artist);
});
router.put('/:id', (req, res) => {
    const { name, grammy } = req.body;
    const artist = updateArtist(req.params.id, name, grammy);
    if (artist) {
        res.json(artist);
    }
    else {
        res.status(404).send('Artist not found');
    }
});
router.delete('/:id', (req, res) => {
    const success = deleteArtist(req.params.id);
    if (success) {
        cleanUpFavorites(req.params.id);
        res.status(204).send();
    }
    else {
        res.status(404).send('Artist not found');
    }
});
export default router;
