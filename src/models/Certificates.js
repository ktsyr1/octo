import mongoose, { Schema } from 'mongoose';

let schema = new Schema({
    code: String,
    url: String, 
    create_at: { type: Number, default: new Date() },
});

mongoose.models = {};
export default mongoose.model('Certificates', schema);
