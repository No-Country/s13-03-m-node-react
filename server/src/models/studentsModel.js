import mongoose from 'mongoose';

const StudentScheme = new mongoose.Schema({
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

	birthDate: {
		type: Date,
		required: true,
		trim: true,
	},
},
{
	timestamps: true,
	versionKey: false,
});

const StudentModel = mongoose.model('students', StudentScheme);

export default StudentModel;
