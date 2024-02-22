import mongoose from "mongoose";


const TeacherScheme = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	last_name: {
		type: String,
		required: true,
		trim: true,
	},
	birth_date: {
		type: Date, 
		required: true,
	},
	subject_id: {
		type: mongoose.Schema.Types.ObjectId, 
		required: true,
		trim: true,
	},
	class_grade_id: {
		type: mongoose.Schema.Types.ObjectId, 
		required: true,
		trim: true,
	},
	is_active: {
		type: Boolean,
		default: true,
	},
}, {
	timestamps: true,
	versionKey: false,
});





const TeacherModel = mongoose.model('teachers', TeacherScheme);

export default TeacherModel;
