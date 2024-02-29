import mongoose from 'mongoose';

const AttendanceScheme = new mongoose.Schema({
    studentid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                return /^\d{2}\/\d{2}\/\d{4}$/.test(value);
            },
            message: 'El formato de fecha es incorrecto. Debe ser DD/MM/YYYY.'
        }
    },
    isJustified: {
        type: Boolean,
        default: false,
        trim: true,
    },
    status: {
        type: String,
        enum: ['asistencia', 'ausencia', 'retiro'],
        default: 'present',
        trim: true,
        required: true,
    },
    certificado: {
        type: Object, 
        required: true,
        default: {
            idCloudinary: '',
            url: '',
            creationDate: '',
        } 
    }
});


const AttendanceModel = mongoose.model('Attendance', AttendanceScheme);
export default AttendanceModel