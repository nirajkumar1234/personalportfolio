const express = require('express');
const NextCommentSchema = require('../Schema/NextCommentSchema');
const ReactCommentSchema = require('../Schema/ReactCommentSchema');
require('../connect/conn')
const Router = express.Router();
const userSchema = require('../Schema/userSchema');
const bcrypt = require('bcrypt');
// Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/blog');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });

// Upload Blog Image

Router.post('/upload-image', upload.single('image'), (req, res) => {
    const imageUrl = '/blog/' + req.file.filename; // get URL of uploaded image
    res.send({ imageUrl: imageUrl });
});









const AdminLogin = require('../Schema/AdminLogin');

// Admin Login

Router.post('/adminregister', async (req, res) => {
    try {
        const email = req.body.email;
        const isEmailExist = await AdminLogin.findOne({ email, email });
        if (!isEmailExist) {
            await AdminLogin.create({ ...req.body });
            res.send(true);
        } else {
            res.send({ "code": "0" })
        }
    } catch (error) {
        res.send({ "code": "0" })
    }
})


Router.post('/adminlogin', async (req, res) => {
    try {
        const email = req.body.email;
        const isEmailFound = await AdminLogin.findOne({ email, email });
        if (isEmailFound) {
            const isPasswordMatch = await bcrypt.compare(req.body.password, isEmailFound.password);
            if (isPasswordMatch) {
                res.send({ "code": "1", "_id": isEmailFound._id })
            }
            else {
                res.send("falsese")
            }
        }
        else {
            res.send(false)
        }
    } catch (error) {

    }
})


Router.post('/signup', async (req, res) => {
    try {
        const isEmailExist = await userSchema.findOne({ email: req.body.email })
        if (isEmailExist) {
            res.send({ "msg": "Email already exists." })
        }
        else {
            const saveData = await userSchema.create({ ...req.body })
            res.send({ "msg": "User created successfully, You can login now..", saveData });
            // res.send(saveData)
        }

    } catch (error) {
        res.send({ "msg": "Please try again later" })
    }
})

Router.post('/login', async (req, res) => {
    try {
        const isEmailExist = await userSchema.findOne({ email: req.body.email })
        if (isEmailExist) {
            const matchPassword = await bcrypt.compare(req.body.password, isEmailExist.password)
            if (matchPassword) {
                res.send({ "status": "1", "userData": { "email": isEmailExist.email, "name": isEmailExist.name, "_id": isEmailExist._id } });
            }
            else {
                res.send({ "status": "0" });
            }
        }
        else {
            res.send({ "status": "0" });
        }
    } catch (error) {
        res.send({ "status": "400" })
    }
})

// For nextjs comment
Router.post('/tailwindwithnextjs', async (req, res) => {
    try {
        await NextCommentSchema.create(req.body);
        console.log(saveComment);
        res.send(saveComment);
    } catch (error) {
    }
})

Router.get('/tailwindwithnextjs', async (req, res) => {
    try {
        const saveComment = await NextCommentSchema.find();
        res.send(saveComment);
    } catch (error) {

    }
})

// For reactjs comment
Router.post('/tailwindwithreactcomment', async (req, res) => {
    try {
        await ReactCommentSchema.create(req.body)
    } catch (error) {
    }
})

Router.get('/tailwindwithreactcomment', async (req, res) => {
    try {
        const saveComment = await ReactCommentSchema.find();
        res.send(saveComment);
    } catch (error) {
    }
})

module.exports = Router;
