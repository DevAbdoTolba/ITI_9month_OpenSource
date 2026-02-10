const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/auth');

const { validate, createPostSchema } = require('../utils/validate');

// All Post routes require login
router.use(auth);

router.get('/', postController.getMyPosts); // "View only their own posts"
router.post('/', validate(createPostSchema), postController.createPost);
router.put('/:id', postController.updatePost); // "Update only their own"
router.delete('/:id', postController.deletePost); // "Delete only their own"

module.exports = router;