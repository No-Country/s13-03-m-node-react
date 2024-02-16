import mongoose, { Schema } from 'mongoose';

const NotificationScheme = new mongoose.Schema({
	sender: {
		type: Schema.ObjectId,
		ref: 'User',
	},

	receiver: {
		type: Schema.ObjectId,
		ref: 'User',
	},

	content: {
		type: String,
	},
},
{
	timestamps: true,
	versionKey: false,
});

const NotificationModel = mongoose.model('notifications', NotificationScheme);

export default NotificationModel;
