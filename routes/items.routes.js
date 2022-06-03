const router = require('express').Router();
const itemController = require('../controllers/items.controller');

router.get('/', itemController.getAllItem);
router.get('/:id', itemController.getByID);
router.put('/:id', itemController.updateItem);

module.exports = router;