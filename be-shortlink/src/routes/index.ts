import { Express, Request, Response } from 'express';
import { createShortUrl, getAnalytics, getShortUrl, handleRedirect } from '../controllers/shortUrl.controller';
import validateResource from './../middlewares/validateResource';
import shortUrlSchema from './../schemas/createShortUrl.schema';

function routes(app: Express) {
  app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
      message: 'Hello dan',
    });
  });

  app.post('/api/v1/short-url', validateResource(shortUrlSchema), createShortUrl);

  app.get('/:shortId', handleRedirect);

  app.get('/api/v1/:shortId', getShortUrl);

  app.get('/api/v1/analytics', getAnalytics);
}

export default routes;
