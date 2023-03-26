const mongoose = require("mongoose")
const uri = "mongodb+srv://localhost:mongodb1234@cluster0.c9pxkia.mongodb.net/mywebsiteserver"
try {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: true }, mongoose.set('strictQuery', false))
    console.log("Connection successful")

} catch (error) {
    console.log(err);
}