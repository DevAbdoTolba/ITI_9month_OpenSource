const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

// All Comment routes require login
router.use(auth);

router.get('/', commentController.getMyComments); // "View only their own comments"
router.post('/', commentController.createComment);
router.put('/:id', commentController.updateComment); // "Update only their own"
router.delete('/:id', commentController.deleteComment); // "Delete only their own"

module.exports = router;