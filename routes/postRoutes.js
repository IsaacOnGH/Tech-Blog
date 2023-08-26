const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/:id', postController.getPost);

module.exports = router;
