const router = require('express').Router();
const commentController = require('../controllers/commentController');

router.post('/:postId', commentController.addComment);

module.exports = router;
