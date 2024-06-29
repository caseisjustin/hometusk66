import express from 'express';
import { getAlbums, getAlbumById, addAlbum, updateAlbum, deleteAlbum } from '../services/albumService.js';
import { cleanUpFavorites } from '../services/favoritesService.js';
const router = express.Router();
router.get('/', (req, res) => {
    res.json(getAlbums());
});
router.get('/:id', (req, res) => {
    const album = getAlbumById(req.params.id);
    if (album) {
        res.json(album);
    }
    else {
        res.status(404).send('Album not found');
    }
});
router.post('/', (req, res) => {
    const { name, year, artistId } = req.body;
    const album = addAlbum(name, year, artistId);
    res.status(201).json(album);
});
router.put('/:id', (req, res) => {
    const { name, year, artistId } = req.body;
    const album = updateAlbum(req.params.id, name, year, artistId);
    if (album) {
        res.json(album);
    }
    else {
        res.status(404).send('Album not found');
    }
});
router.delete('/:id', (req, res) => {
    const success = deleteAlbum(req.params.id);
    if (success) {
        cleanUpFavorites(req.params.id);
        res.status(204).send();
    }
    else {
        res.status(404).send('Album not found');
    }
});
export default router;
