import mongoose, { Schema } from 'mongoose';

let schema = new Schema({
    fullName: String,
    email: { type: String, required: true },

    phoneNumber: { type: String, required: true },
    create_at: { type: Number, default: new Date() },
});

mongoose.models = {};
export default mongoose.model('userev', schema);