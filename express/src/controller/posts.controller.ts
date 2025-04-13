import { Router } from 'express';
import { Posts } from '../service';
import { paramsMiddleware } from '../middleware';

const router = Router();
const service = new Posts();

router.get('/', (req, res) => {
	const posts = service.getPosts();
	res.status(200).json({ posts });
});

router.get('/post/:id', paramsMiddleware, (req, res) => {
	const post = service.getPost(req.params.id);
	res.status(200).json({ post });
});

router.post('/post/:id', paramsMiddleware, (req, res) => {
	const status = service.updatePost(req.params.id);
	res.status(200).json(status);
});

router.delete('/post/:id', paramsMiddleware, (req, res) => {
	const status = service.deletePost(req.params.id);
	res.status(200).json(status);
});

export const postsRouter = router;
