import mongoose, { Schema } from 'mongoose';

let schema = new Schema({
    title: String,
    slug: String,
    list: [
        { title: String, slug: String, sort: Number }
    ]
});

mongoose.models = {};
export default mongoose.model('post', schema);
