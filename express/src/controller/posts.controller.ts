import { Router } from 'express';
import { PostsService } from '../service';
import { paramsMiddleware } from '../middleware';

const router = Router();
const service = new PostsService();

router.get('/:id', async (req, res) => {
  const posts = await service.getPosts(req.params.id);
  res.status(200).json({ posts });
});

router.get('/post/:id', paramsMiddleware, async (req, res) => {
  const post = await service.getPost(req.params.id);
  res.status(200).json({ post });
});

router.post('/post/:id', paramsMiddleware, async (req, res) => {
  const user = await service.createPost(req.params.id, req.body);
  res.status(200).json({ user });
});

router.put('/post/:id', paramsMiddleware, async (req, res) => {
  const post = await service.updatePost(req.params.id, req.body);
  res.status(200).json({ post });
});

router.delete('/post/:id', paramsMiddleware, async (req, res) => {
  const status = await service.deletePost(req.params.id);
  res.status(200).json({ status });
});

export const postsRouter = router;
