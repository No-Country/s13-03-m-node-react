import mongoose from "mongoose";

const ImageScheme = new mongoose.Schema({
    idCloudinary:{
        type: String,
        required: true,
		trim: true,
    },
    url:{
        type: String,
        required: true,
		trim: true,
    },
    creationDate:{
        type: Date,
        required: true,
		trim: true,
    },
    title:{
        type: String,
        required: false,
		trim: true,
    },
    description:{
        type: String,
        required: false,
		trim: true,
    }
})

const ImageModel = mongoose.model('imagen', ImageScheme)

export default ImageModel;