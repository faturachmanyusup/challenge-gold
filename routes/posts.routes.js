const router = require('express').Router();
const postController = require('../controllers/posts.controller');

router.get('/', postController.getAllPost);
router.get('/:id', postController.getPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;