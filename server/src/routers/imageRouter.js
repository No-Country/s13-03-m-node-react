import { Router } from "express";
import { createImage, getImageById, getImages, updateImage, deleteImage  } from '../controllers/imageController.js';

const imageRouter = Router ();


imageRouter.get('/', getImages );
imageRouter.get('/:id', getImageById );
imageRouter.post('/', createImage );
imageRouter.put('/:id', updateImage );
imageRouter.delete('/:id', deleteImage );
//deleteimage deberia tener un atributo enbled = boolean

export {imageRouter};