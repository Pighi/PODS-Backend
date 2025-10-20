import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary.js';
import { addObservation, getObservations } from '../controllers/observationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
const storage = new CloudinaryStorage({
  cloudinary,
  params: { folder: 'plant-observations' }
});
const upload = multer({ storage });

router.post('/', protect, upload.single('image'), addObservation);
router.get('/', protect, getObservations);
export default router;
