const mongoose = require('mongoose');
const ReactCommentSchema = mongoose.Schema({
    name: String,
    comment: String,
}, { timestamps: true });
module.exports = mongoose.model('reactcommentschema', ReactCommentSchema);