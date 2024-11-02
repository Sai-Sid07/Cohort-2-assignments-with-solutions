const { Router, json } = require("express");
const router = Router();
const {userMiddleware, userExistsMiddleware} = require("../middleware/user");
const {User, Course} = require("../db/index");

router.use(json())
// User Routes
router.post('/signup', userExistsMiddleware, async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    if(password.length < 8){
        return res.status(400).send({
            message: "Password doesn't meet criteria"
        })
    }

    const user = new User({
        username: username,
        password: password
    })

    try {
        await user.save()
        return res.status(200).send({
            message: 'User created successfully'
        })
    } catch (error) {
        return res.status(400).send({
            message: 'Error creating user',
            error: error
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
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

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username
    try {
        const course = await Course.findOne({id: courseId})
        if(course != null){
            await User.findOneAndUpdate({username: username}, {$push: {coursesPurchased: course.id}})
            return res.status(200).send({
                message: "Course purchased successfully"
            })
        }
    }catch(error){
        return res.status(400).send({
            message: 'Erorr buying course',
            error: error
        })
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username
    try {
        const user = await User.findOne({username: username})
        const purchasedCoursesID = user.coursesPurchased
        const purchasedCourses = await Course.find({id: {$in: purchasedCoursesID } })
        return res.status(200).send({
            purchasedCourses: purchasedCourses
        })
    }catch(error){
        return res.status(400).send({
            message: 'Error creating user',
            error: error
        })
    }
});

module.exports = router