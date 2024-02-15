import mongoose from 'mongoose';

const TeacherScheme = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},

	lastname: {
		type: String,
		required: true,
		trim: true,
	},
	age: {
		type: Number,
		required: true,
		trim: true,
	},

	specialty: {
		type: String,
		required: true,
		trim: true,
	},
},
{
	timestamps: true,
	versionKey: false,
});

const TeacherModel = mongoose.model('teachers', TeacherScheme);

export default TeacherModel;
