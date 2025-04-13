import { Router } from 'express';
import { Users } from '../service';

const router = Router();
const service = new Users();

router.get('/', (req, res) => {
	const users = service.getUsers();
	res.status(200).json({ users });
});

router.get('/user/:id', (req, res) => {
	const user = service.getUser(req.params.id);
	res.status(200).json({ user });
});

router.post('/user/:id', (req, res) => {
	const status = service.updateUser(req.params.id);
	res.status(200).json(status);
});

router.delete('/user/:id', (req, res) => {
	const status = service.deleteUser(req.params.id);
	res.status(200).json(status);
});

export const usersRouter = router;
