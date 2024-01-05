import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NewsEmails = new Schema({
    email: { type: String, required: true }
}, { timestamps: true });

const Newslatter = mongoose.model('Blog', NewsEmails);

module.exports = Newslatter;