import express from 'express';
import { upload } from '../middleware/upload.js';
import { predictImage } from '../controllers/predictController.js';

const router = express.Router();

router.post('/', upload.single('image'), predictImage);

export { router as predictRouter };