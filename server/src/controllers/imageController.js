import cloudinary from '../config/upload.cjs';
//import cloudinary, { uploader } from '../config/upload.cjs';
import ImageManager from '../dao/managerImage.js';
import { Types } from 'mongoose';

const { ObjectId } = Types;
const imagemanager = new ImageManager();

const createImage = async(req, res) => {

    console.log('req.files: ', req.files)
    const image = req.files.image;
    const {datatitle,datadescription} = req.body
    console.log('titulo y descripcion: ', datatitle, datadescription)


    try {
      if (!image) {
          return res.status(404).json({ error: 'No File Selected. Please select an file and try' });
      }
      if(image){
      console.log("image to be save")}
      console.log('image tempFilePath:', image.tempFilePath)
      let result_image = await cloudinary.uploader.upload(image.tempFilePath, {
          public_id: `${Date.now()}`,
          resource_type: "auto",
      });
      console.log('result image cloudinary:' , result_image)
      console.log('savind image data on atlas cloud')
      let newImage = {
        idCloudinary : result_image.public_id,
        url : result_image.secure_url,
        creationDate: new Date(),
        title:  datatitle,
        description: datadescription
      }
      console.log(newImage)
      const newImageToCreate = await imagemanager.createImage(newImage)
 
      console.log(newImageToCreate)
      return res.status(200).json({
        data: newImage,
        status:0,
        message:'Imagen creada correctamente'
      })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          data: {},
          status: 1,
          message: 'Error interno del servidor: ' + error.message,
	    	});
    }
}

async function getImages(req, res){
  try {
    const Images = await imagemanager.getAllImages();
    if (!Images) {
			throw new Error('No hay imagenes para mostrar.');
		}
		return res.status(200).json({
			data: Images,
			status: 0,
			message: 'Se han encontrado los siguientes imagenes',
		});
  } catch (error) {
    return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
  }
}

async function getImageById(req, res){
  const id = req.params.id
  console.log('id: ', id) 
  try {
		const Image = await imagemanager.getOneImage({_id: new ObjectId(id)});
		console.log('image found: ', Image)
		if (!Image) {
			throw new Error('La imagen no existe');
		}
		return res.status(200).json({
			data: Image,
			status: 0,
			message: 'Imagen encontrado exitosamente.',
		});
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

async function updateImage(req, res) {
	
	try {
		const id = req.params.id
		const data = req.body;
		let query;
		if(id){
			if(ObjectId.isValid(id)){
				query = {_id: new ObjectId(id)}
				console.log('query: ' , query)
			}else {
				return res.status(400).json({ error: 'ID inválido' });
			}
		}else{
			query = id;
		}
		const imageUpdated = await imagemanager.updateImage(query, data);
		console.log('image updated', imageUpdated)
		const imageUpdatedTwo = await imagemanager.getOneImage(query)
		console.log('imageUpdatedTwo', imageUpdatedTwo)
		return res.status(200).json({
            data: imageUpdatedTwo,
            status: 0,
            message: 'Imagen actualizada correctamente',
        });
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

//Done: hacer delete image from cloudinary y eliminar de la base de datos
async function deleteImage(req,res){
	const id=req.params.id;

	if (!id) {
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Por favor, ingrese un id de imagen',
        });
    }
	
	const imageToDelete = await imagemanager.getOneImage({_id: new ObjectId(id)})
	console.log('image to delete: ', imageToDelete, imageToDelete.idCloudinary)
	if (!imageToDelete) {
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'La imagen no existe',
        });
    }
	let deletedImage
	try {
		deletedImage = cloudinary.uploader.upload(imageToDelete.idCloudinary);
	} catch (error) {
		return res.status(500).json({
            data: {},
            status: 1,
            message: 'La imagen no se pudo eliminar, intente nuevamente mas tarde',
        });
	}
	const deletedImageFromDB = imagemanager.deleteOneImage({_id: new ObjectId(id)})
	if(!deletedImageFromDB){
		return res.status(500).json({
            data: {},
            status: 1,
            message: 'La imagen no se pudo eliminar, intente nuevamente mas tarde',
        });
	}
	return res.status(200).json({
        data: deletedImageFromDB,
        status:0,
        message:'Imagen eliminada correctamente'
      })

}



export { createImage, getImages, getImageById, updateImage, deleteImage };