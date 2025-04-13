import express from 'express';
import { usersRouter, postsRouter } from './controller';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use((req, res) => {
	res.status(404).json({ message: 'Not Found' });
});

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
