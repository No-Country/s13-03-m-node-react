import mongoose from 'mongoose';

const EvaluationSchema = new mongoose.Schema({
    studentid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students',
        required: true,
        trim: true,
    },
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    calificacion: {
        type: Number,
        required: true,
        trim: true,
    },
    fechaEvaluacion: {
        type: String,
        required: true,
        trim: true,
    },
});

// Middleware de prevalidación para formatear la fecha antes de guardarla en la base de datos
EvaluationSchema.pre('save', function(next) {
    // Verifica si la fecha está en el formato "DD-MM-YYYY"
    if (/\d{2}-\d{2}-\d{4}/.test(this.fechaEvaluacion)) {
        // Reformatea la fecha cambiando los guiones por barras
        this.fechaEvaluacion = this.fechaEvaluacion.replace(/-/g, '/');
    }
    return next();
});

const EvaluationModel = mongoose.model('evaluationsCollection', EvaluationSchema);

export default EvaluationModel;


    