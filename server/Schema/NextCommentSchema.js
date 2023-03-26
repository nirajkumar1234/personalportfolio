const mongoose = require('mongoose');
const NextCommentSchema = mongoose.Schema({
    name: String,
    comment: String,
}, { timestamps: true });
module.exports = mongoose.model('nextcommentschema', NextCommentSchema);