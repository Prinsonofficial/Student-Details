const studentmodel = require('../models/studmodel.js')

//Show all student details
const list = (req, res, next) => {
    studentmodel.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error has occured!'
        })
    })
}

//Find the students who passed or failed
const show = (req, res, next) => {
    
    let Result = req.body.result
    
    studentmodel.find({"result": Result})    
    .then(response => {
        res.json({
            message: response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}


//Add a student to database
const store = (req, res, next) => {
    console.log(req)
    sum = req.body.mark1 + req.body.mark2 + req.body.mark3
    if ( sum / 3 >= 40 ){
        result = "passed"
    }
    else{
        result = "failed"
    }

    let student = new studentmodel({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        mark1: req.body.mark1,
        mark2: req.body.mark2,
        mark3: req.body.mark3,
        result: result        
    })
    
    student.save()
    .then(response => {
        res.json({
            message: 'Student details added successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//delete a student from the db
const destroy = (req, res, next) => {
    let studentID = req.body.id
    studentmodel.findOne({"id":studentID})
    .then(() => {
        res.json({
            message: 'Student details deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    list, show, store, destroy
}
