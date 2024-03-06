

const SubjectScheme = mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    horario:[{
        type: Schema.Types.ObjectId,
        ref:'schedule'   
    }],
    notaFinal:{
        type: Number,
    },
    idEvaluation:[{
        type: Schema.Types.ObjectId,
        ref:'evaluationsCollection'
    }]
});

const SubjectModel = mongoose.model('subject', SubjectScheme);

export default SubjectModel;