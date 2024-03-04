import mongoose, { Schema } from "mongoose";

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
    },
    isportada:{
        type: Boolean, 
        required: true
    },
    isGaleria:{
        type: Boolean, 
        required: true
    },
    idActivity:{
        type: String,
        required: true
    }
})

const ImageModel = mongoose.model('imagen', ImageScheme)

export default ImageModel;