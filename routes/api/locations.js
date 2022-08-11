const express = require('express');
const router = express.Router();
const locationsCtrl = require('../../controllers/api/locations');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, locationsCtrl.get);
router.post('/new', ensureLoggedIn, locationsCtrl.create);

module.exports = router;