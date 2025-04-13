import { type Request, type Response, type NextFunction } from 'express';

export const paramsMiddleware = (req: Request, res: Response, next: NextFunction) => {
	if (req.params.id && isNaN(Number(req.params.id))) {
		res.status(400).json({ message: 'Неверные параметры запроса' });

		return;
	}

	next();
};
