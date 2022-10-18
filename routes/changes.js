const express = require('express');
const router = express.Router();
const isLoggedIn = require('../config/auth')

const changesCtrl = require('../controllers/changes');

router.post('/recyclables/:id/changes', isLoggedIn, changesCtrl.create);
router.delete('/changes/:id', isLoggedIn, changesCtrl.delete);

module.exports = router;