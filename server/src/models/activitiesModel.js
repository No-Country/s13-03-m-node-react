import mongoose from 'mongoose'

const ActivitiesScheme = new mongoose.Schema({
    name:{
        type: String, 
        required: true, 
        trim: true
    },
    content:{
        type: String, 
        required: true, 
        trim: true 
    },
    picture:[{
        type: Schema.Types.ObjectId,
        ref: "Imagen",
    }],
    date:{
        type: Date,
		required: true,
		trim: true,
    },
    authorizedStudents:[{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }]
})