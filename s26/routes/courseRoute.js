const express = require ('express');
const router = express.Router();

//require userController

const courseController = require('../controllers/courseController');

//authenticate the process 
const auth = require('../auth');
const { response } = require('express');

//methods creation 

// 1. Create a Course
router.post('/create-course', auth.verify, (req, res) => {
    courseController.createCourse(req.body).then(result => res.send(result));

})

// 2. Retrieve all courses

router.get ('/', (req,res) => {
    courseController.getAllCourses().then(result => res.send(result))
})

// 3. Retrieve active courses

router.get ('/active-courses', auth.verify, (res) => {
    courseController.getActiveCourses().then(result => res.send(result))
})

// 4. Retrieve a specific course using findOne()
router.get('/specific-course', auth.verify, (req,res) => {
    courseController.getSpecificCourses(req.body.courseName).then(result => res.sendDate(result))
})

// 5. Retrieve a specific course using findById
router.get('/:courseId', auth.verify, (req,res) => {
    let paramsId = req.params.courseId

    courseController.getCourseById(paramsId).then(result => res.send(result))
})

//update isActive status of the course using findOneAndUpdate
//update isActive status to false

router.put('/archive', auth.verify, (req,res) => {
    courseController.archivedCourse(req.body.courseName).then(result => res.send(result))
})

router.put('/unarchive', auth.verify, (req, res) => {
    courseController.unarchiveCourse(req.body.courseName).then(result => res.send(result))
})

//update isActive status using findByIdAndUpdate()
//set isActive status
router.put('/:courseID/archive', auth.verify, (req,res) => {
    courseController.archiveByCourseId(req.params.courseID).then(result => res.send (result))
})

//unarchived course by id
router.put('/:courseID/unarchived', auth.verify, (req,res) => {
    courseController.unarchiveCourseById(req.params.courseID).then(result => res.send(result))

})

//edit the course using course id
router.put('/:courseID/edit', auth.verify, (req,res) => {
    courseController.editCourse(req.params.courseID).then(result => res.send(result))
})


//delete course using findOneAndDelete()

router.delete('/delete-course', auth.verify, (req,res) => {
    courseController.deleteCourse(req.body.courseName).then(result => res.send(result))
})

//delete course using findByIdAndDelete()

router.delete('/:courseID/delete-course', auth.verify, (req,res) => {
    courseController.deleteCourseById(req.params.courseID).then(result => res.send(result))
})

module.exports = router;