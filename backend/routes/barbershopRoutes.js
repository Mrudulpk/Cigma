import express from 'express';
const router = express.Router();
import { getBarbershops, getBarbershopById } from '../controllers/barbershopController.js';

router.route('/').get(getBarbershops);

router.route('/:id').get(getBarbershopById);

export default router
 