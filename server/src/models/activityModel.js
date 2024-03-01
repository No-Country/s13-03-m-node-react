import mongoose, { Schema } from 'mongoose';

const ActivityScheme = new mongoose.Schema({
    title:{
        type: String, 
        required: true, 
        trim: true 
    },
    description:{
        type: String, 
        required: true, 
        trim: true 
    },
    requirements:{
        type: String, 
        required: true, 
        trim: true
    },
    creationDate:{
        type: Date,
		required: true,
		trim: true,
    },
    //guardar hora de inicio y fin
    activityDate:{
        type: Date,
		required: true,
		trim: true,
    },
    hourBegin:{
        type: String, 
        required: true, 
        trim: true
    },
    hourEnd:{
        type: String, 
        required: true, 
        trim: true
    },
    needAuthorization:{
        type: Boolean, 
        trim: true 
    },
    // grade:{
    //     type: Schema.Types.ObjectId,
    //     ref: "grades"
    // }
    greade:{
        type: String,
        trim: true,
        require: true
    }
},
{
    timestamps: true,
	versionKey: false,
})

const ActivityModel = mongoose.model('activity', ActivityScheme)

export default ActivityModel;

