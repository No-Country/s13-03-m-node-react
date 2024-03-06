import mongoose,  { Schema } from "mongoose";


const ScheduleScheme = mongoose.Schema({

    diaSemana:{
        type: String,
        required: true
    },
    horaInicio:{
        type: String,
        required: true
    },
    horaFin:{
        type: String,
        required: true
    }

})

const ScheduleModel = mongoose.model('schedule', ScheduleScheme);

export default ScheduleModel;