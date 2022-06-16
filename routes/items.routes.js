const router = require('express').Router();
const itemController = require('../controllers/item.controller');

router.get('/', itemController.getAllItem);
router.get('/:id', itemController.getByID);
router.post('/', itemController.addItem);
router.put('/:id', itemController.updateItem);
router.delete('/', itemController.deleteItem);

module.exports = router;