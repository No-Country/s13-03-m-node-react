import mongoose from 'mongoose';

const AttendanceScheme = new mongoose.Schema({
    studentid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
        trim: true,
    },

    date: {
        type: Date,
        required: true,
        trim: true,
    },

    isJustified: {
        type: Boolean,
        default: false,
        trim: true,
    },

    status: {
        type: String,
        enum: ['present', 'absent', 'is laving earsy'],
        default: 'present',
        trim: true,
    },
});


const AttendanceModel = mongoose.model('Attendance', AttendanceScheme);
export default AttendanceModel