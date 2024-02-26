import mongoose from 'mongoose';

const StudentScheme = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},

	lastName: {
		type: String,
		required: true,
		trim: true,
	},

	birthDate: {
		type: Date,
		required: true,
		trim: true,
	},

	classroom:{
		type: String,
		required: true,
		trim: true,
	},

	groupId:{
		type: String,
		required: true,
		trim: true,
	},
	isActive: {
		type: Boolean,
		default: true,
		trim: true,
	},
},
{
	timestamps: true,
	versionKey: false,
});

const StudentModel = mongoose.model('students', StudentScheme);

export default StudentModel;
