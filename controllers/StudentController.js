const studentmodel = require('../models/Student.js')

//Get the result of the student by passing id
const result = (req, res, next) => {
    studentID = req.body.id
    studentmodel.findOne({"id":studentID})
    .then(response => {
        res.json({
            message: response.result
        })
    })
    .catch(error => {
        res.json({
            message: 'An error has occured!'
        })
    })
}

//Find the students who passed or failed
const details = (req, res, next) => {
    
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
const upload = (req, res, next) => {
    sum = req.body.mark1 + req.body.mark2 + req.body.mark3
    var result
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


module.exports = {
    result, details, upload
}
