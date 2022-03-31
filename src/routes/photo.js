import express from 'express';
import multer from 'multer';

import photoController from '../controller/photoController';
import configMulter from '../config/molder';

const router = express.Router();
const upload = multer(configMulter);
router.post('/', upload.single('foto'), photoController.store);

export default router;
