import mongoose from 'mongoose';

const ParentScheme = new mongoose.Schema({
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

	phone: {
		type: String,
		require: true,
		trim: true,
},
},
{
	timestamps: true,
	versionKey: false,
});

const ParentModel = mongoose.model('parents', ParentScheme);

export default ParentModel;
