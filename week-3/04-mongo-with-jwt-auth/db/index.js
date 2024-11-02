const mongoose = require('mongoose');
require('dotenv').config()

// Connect to MongoDB
const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/course-website-jwt?retryWrites=true&w=majority`;
mongoose.connect(
    connectionString
).then(() => {
    console.log("MongoDB is connected");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    id: Number,
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    id: Number,
    username: String,
    password: String,
    coursesPurchased: [Number]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id: Number, 
    title: String,
    description: String,
    price: Number,
    imageLink: String, 
    published: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}