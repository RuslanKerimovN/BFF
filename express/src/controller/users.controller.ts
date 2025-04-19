import { Router } from 'express';
import { UsersService } from '../service';
import { paramsMiddleware } from '../middleware';

const router = Router();
const service = new UsersService();

router.get('/', async (req, res) => {
  const users = await service.getUsers();
  res.status(200).json({ users });
});

router.get('/user/:id', paramsMiddleware, async (req, res) => {
  const user = await service.getUser(req.params.id);
  res.status(200).json({ user });
});

router.post('/user', paramsMiddleware, async (req, res) => {
  const status = await service.createUser(req.body);
  res.status(200).json({ status });
});

router.put('/user/:id', paramsMiddleware, async (req, res) => {
  const user = await service.updateUser(req.params.id, req.body);
  res.status(200).json({ user });
});

router.delete('/user/:id', paramsMiddleware, async (req, res) => {
  const status = await service.deleteUser(req.params.id);
  res.status(200).json({ status });
});

export const usersRouter = router;
