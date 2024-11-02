const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const { get } = require("mongoose");
const router = Router();

router.use(json())

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    if(password.length < 8){
        return res.status(400).send({
            message: "Password doesn't meet criteria"
        })
    }

    const admin = new Admin({
        username: username,
        password: password
    })

    try {
        await admin.save()
        return res.status(200).send({
            message: 'Admin created successfully'
        })
    } catch (error) {
        return res.status(400).send({
            message: 'Error creating admin',
            error: error
        })
    }
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const getPreviousID = await Course.countDocuments()

    const newCourse = new Course({
        id: getPreviousID + 1,
        title: req.body.title, 
        description: req.body.description, 
        price: req.body.price, 
        imageLink: req.body.imageLink,
        published: true
    })

    try {
        await newCourse.save()
        return res.status(200).send({
            message: 'Course created successfully', 
            courseId: newCourse.id
        })
    } catch (error) {
        return res.status(400).send({
            message: 'Error creating course',
            error: error
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find();
        return res.status(200).send({
            courses: courses
        })
    } catch (error) {
        return res.status(400).send({
            message: "Error occured",
            error: error
        })
    }
});

module.exports = router;