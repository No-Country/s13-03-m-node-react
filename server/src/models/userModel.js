import mongoose from 'mongoose';

const UserScheme = new mongoose.Schema({
	names: { //names or name??
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
		//unique: true,
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
},
{
	timestamps: true,
	versionKey: false,
});

const UserModel = mongoose.model('users', UserScheme);

export default UserModel;

//acuerdate de que UserScheme es una clase instanciada por mongosee, por ende va con UpperCamelCase
// mongoose.model('user', UserScheme) 'users va a ser el nombre del documento (tabla) a crear y se usa snake_case en plural';
