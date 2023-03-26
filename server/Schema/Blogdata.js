const mongoose = require('mongoose');
const Blogdata = mongoose.Schema({
    content: String,
    image: String
}, { timestamps: true });
module.exports = mongoose.model('blogdata', Blogdata);