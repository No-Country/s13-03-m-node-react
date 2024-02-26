import mongoose from 'mongoose'

const NotificationScheme = new mongoose.Schema({
    tipo:{
        type: String, 
        required: true, 
        trim: true
    },
    titulo:{
        type: String, 
        required: true, 
        trim: true 
    },
    contenido:[{
        type: String, 
        required: true, 
        trim: true 
    }],
    fechaCreacion:{
        type: Date,
		required: true,
		trim: true,
    },
    leido:[{
        type: Boolean, 
        required: true, 
        trim: true 
    }]
})
const NotificationModel = mongoose.model('notification', NotificationScheme)

export default NotificationModel;