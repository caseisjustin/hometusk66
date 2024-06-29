import express from 'express';
import { getFavorites, addFavoriteArtist, addFavoriteAlbum, addFavoriteTrack, removeFavoriteArtist, removeFavoriteAlbum, removeFavoriteTrack } from '../services/favoritesService.js';
const router = express.Router();
router.get('/', (req, res) => {
    res.json(getFavorites());
});
router.post('/artist/:id', (req, res) => {
    const success = addFavoriteArtist(req.params.id);
    if (success) {
        res.status(201).send();
    }
    else {
        res.status(400).send('Artist already in favorites');
    }
});
router.post('/album/:id', (req, res) => {
    const success = addFavoriteAlbum(req.params.id);
    if (success) {
        res.status(201).send();
    }
    else {
        res.status(400).send('Album already in favorites');
    }
});
router.post('/track/:id', (req, res) => {
    const success = addFavoriteTrack(req.params.id);
    if (success) {
        res.status(201).send();
    }
    else {
        res.status(400).send('Track already in favorites');
    }
});
router.delete('/artist/:id', (req, res) => {
    const success = removeFavoriteArtist(req.params.id);
    if (success) {
        res.status(204).send();
    }
    else {
        res.status(400).send('Artist not in favorites');
    }
});
router.delete('/album/:id', (req, res) => {
    const success = removeFavoriteAlbum(req.params.id);
    if (success) {
        res.status(204).send();
    }
    else {
        res.status(400).send('Album not in favorites');
    }
});
router.delete('/track/:id', (req, res) => {
    const success = removeFavoriteTrack(req.params.id);
    if (success) {
        res.status(204).send();
    }
    else {
        res.status(400).send('Track not in favorites');
    }
});
export default router;
