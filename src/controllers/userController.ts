import express, { Request, Response } from 'express';
import { getUsers, getUserById, addUser, updateUser, deleteUser } from '../services/userService.js';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json(getUsers());
});

router.get('/:id', (req: Request, res: Response) => {
  const user = getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

router.post('/', (req: Request, res: Response) => {
  const { login, password } = req.body;
  const user = addUser(login, password);
  res.status(201).json(user);
});

router.put('/:id', (req: Request, res: Response) => {
  const { login, password } = req.body;
  const user = updateUser(req.params.id, login, password);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

router.delete('/:id', (req: Request, res: Response) => {
  const success = deleteUser(req.params.id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

export default router;