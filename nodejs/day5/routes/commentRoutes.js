const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

const { validate, createCommentSchema } = require('../middleware/validate');

router.use(auth);

router.get('/', commentController.getMyComments); 
router.post('/', validate(createCommentSchema), commentController.createComment);
router.put('/:id', commentController.updateComment); 
router.delete('/:id', commentController.deleteComment); 

module.exports = router;