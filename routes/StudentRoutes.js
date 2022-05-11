const { Router } = require('express')
const express = require('express')
const router = express.Router()

const Studentcontrl = require('../controllers/StudentController') 

router.post('/',Studentcontrl.result)
router.post('/show',Studentcontrl.details)
router.post('/upload',Studentcontrl.upload)

module.exports = router