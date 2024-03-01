import mongoose from 'mongoose';

const EvaluationSchema = new mongoose.Schema({
    studentid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students',
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    grade: {
        type: Number,
        required: true,
        trim: true,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    testDate: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                // Verifica si la fecha está en el formato "DD/MM/YYYY"
                return /^\d{2}\/\d{2}\/\d{4}$/.test(value);
            },
            message: 'El formato de fecha es incorrecto. Debe ser DD/MM/YYYY.'
        }
    },
});

const EvaluationModel = mongoose.model('evaluationsCollection', EvaluationSchema);

export default EvaluationModel;

    