import mongoose from 'mongoose'

const NotificationScheme = new mongoose.Schema({
    tipo:{
        type: String, //general o individual
        required: true, 
        trim: true
    },
    titulo:{
        type: String, 
        required: true, 
        trim: true 
    },
    contenido:{
        type: String, 
        required: true, 
        trim: true 
    },
    fechaCreacion:{
        type: Date,
		required: true,
		trim: true,
    },
    leido:{
        type: Boolean, 
        trim: true 
    },
    idCurso:[{

    }]
})
const NotificationModel = mongoose.model('notification', NotificationScheme)

export default NotificationModel;