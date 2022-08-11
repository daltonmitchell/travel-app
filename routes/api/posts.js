const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, postsCtrl.get)
router.post('/new', ensureLoggedIn, postsCtrl.create);

module.exports = router;