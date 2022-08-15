const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, postsCtrl.get)
router.get('/:id', ensureLoggedIn, postsCtrl.getOne);
router.post('/new', ensureLoggedIn, postsCtrl.create);
router.put('/:id/update', ensureLoggedIn, postsCtrl.update);
router.delete('/:id/delete', ensureLoggedIn, postsCtrl.delete);

module.exports = router;