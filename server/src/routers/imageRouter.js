import { Router } from "express";
import { createImage, getImageById, getImages, updateImage  } from '../controllers/imageController.js';

const imageRouter = Router ();


imageRouter.get('/', getImages );
imageRouter.get('/:id', getImageById );
imageRouter.post('/', createImage );
imageRouter.put('/:id', updateImage );
//imageRouter.delete('/:id', );
//deleteimage deberia tener un atributo enbled = boolean

export {imageRouter};