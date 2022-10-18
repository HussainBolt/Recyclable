const express = require('express')
const router = express.Router()
const recyclablesCtrl = require('../controllers/recyclables')
const isLoggedIn = require('../config/auth')

router.get('/', recyclablesCtrl.index)
router.get('/new', isLoggedIn, recyclablesCtrl.new)
router.get('/:id', recyclablesCtrl.show)
router.post('/', isLoggedIn, recyclablesCtrl.create)
router.delete('/:id', isLoggedIn, recyclablesCtrl.delete)
router.get('/:id/edit', isLoggedIn, recyclablesCtrl.edit)
router.put('/:id', isLoggedIn, recyclablesCtrl.update)

module.exports = router;