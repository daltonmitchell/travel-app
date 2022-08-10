const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, profilesCtrl.get);
router.post('/new', ensureLoggedIn, profilesCtrl.create);

module.exports = router;