const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    console.log("Hello ");
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        console.log(this.password);
        next();
    }
});
module.exports = mongoose.model('userInfo', userSchema);