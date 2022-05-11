const { Router } = require('express')
const express = require('express')
const router = express.Router()

const Studentcontrl = require('../controllers/studcontrollers') 

router.get('/',Studentcontrl.list)
router.post('/show',Studentcontrl.show)
router.post('/store',Studentcontrl.store)
router.post('/delete',Studentcontrl.destroy)

module.exports = router