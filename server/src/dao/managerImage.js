import Database from "../config/mongodb.js";
import { createDocument, getOneDocument, getAllDocuments, updateDocument, deleteDocument } from "../config/factory.js";
import ImageModel from "../models/imageModel.js";

class ImageManager{
    constructor(){
        this.db = new Database();
        this.createDocument = createDocument;
        this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
        this.deleteDocument = deleteDocument;
    }

    async createImage(data){
        try{
            const { idCloudinary, url, creationDate, title, description} = data;
            const image = ImageModel({
                idCloudinary, url, creationDate, title, description
            })
            const newImage = await this.createDocument('imageCollection', image);
            return newImage
        }catch{
            console.error(error);
			throw new Error(`Error al crear la imagen: ${error.message}`);
        }
    }

    async getOneImage(query){
        try {
			const image = await this.getOneDocument('imageCollection', query);
			return image;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la imagen: ${error.message}`);
		}
    }

    async getAllImages(){
        try {
            const images = await this.getAllDocuments('imageCollection');
            return images
        } catch (error) {
            console.log(error)            
            throw new Error(`Error al obtener las imagenes: ${error.message}` )
        }
    }

    async updateImage(filter, dataUpadte){
        try {
           const image = await  this.updateDocument("imageCollection", filter , dataUpadte ); 
           return image
        } catch (error) {
            console.log(error)            
            throw new Error(`Error al obtener las imagenes: ${error.message}` )
        }
    }

    async deleteOneImage(query){
        try {
			const image = await this.deleteDocument('imageCollection', query);
			return image;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al eliminar la imagen: ${error.message}`);
		}
    }
}

export default ImageManager;