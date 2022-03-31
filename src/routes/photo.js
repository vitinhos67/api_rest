import express from 'express';
import photoController from '../controller/photoController';

const router = express.Router();

router.post('/', photoController.store);

export default router;
