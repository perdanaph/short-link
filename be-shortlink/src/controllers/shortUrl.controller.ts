import { Request, Response } from 'express';
import analytics from '../models/analytic';
import shortUrl from '../models/shortUrl';

export async function createShortUrl(req: Request, res: Response) {
  try {
    const { destination } = req.body;

    const shorturl = await shortUrl.create({ destination });

    return res.status(201).json({
      message: 'Success',
      data: shorturl,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function handleRedirect(req: Request, res: Response) {
  try {
    const { shortId } = req.params;

    const short = await shortUrl.findOne({ shortId }).lean();

    if (!short) {
      return res.sendStatus(404);
    }

    await analytics.create({ shortUrl: short._id });

    return res.redirect(short.destination);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function getAnalytics(req: Request, res: Response) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}

export async function getShortUrl(req: Request, res: Response) {
  const { shortId } = req.params;
  const short = await shortUrl.findOne({ shortId }).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  return res.json(short);
}
