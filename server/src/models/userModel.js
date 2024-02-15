import mongoose from 'mongoose';

const userScheme = new mongoose.Schema({
	names: {
		type: String,
		required: true,
		trim: true,
	},

	lastname: {
		type: String,
		required: true,
		trim: true,
	},

	birthDate: {
		type: Date,
		required: true,
		trim: true,
	},

	email: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: function (value) {
				return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
			},
			message: 'El campo email no es una dirección de correo electrónico válida.',
		},
	},

	country: {
		type: String,
		required: true,
		trim: true,
	},

	picture: {
		type: String,
		trim: true,
	},

	rol: {
		type: String,
		enum: ['admin', 'user'],
		default: 'user',
		trim: true,
	},
});

const UserModel = mongoose.model('User', userScheme);

export default UserModel;
