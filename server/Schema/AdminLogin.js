const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AdminLogin = mongoose.Schema({
    email: String,
    password: String,
}, { timestamps: true });
AdminLogin.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        next()
    }
})

module.exports = mongoose.model('adminlogin', AdminLogin);