import mongoose, { Document } from 'mongoose';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0987654321', 6);

export interface ShortURL extends Document {
  shortId: string;
  destination: string;
}

const shortUrlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: { type: String, required: true },
});

const shortUrl = mongoose.model<ShortURL>('shortUrl', shortUrlSchema);

export default shortUrl;
