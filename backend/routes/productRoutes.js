const express = require("express")
const router = express.Router()
const auth = require('../middlewares/authMiddleware')
const ctrl = require('../controllers/productController');
const { default: adminMiddleware } = require("../middlewares/adminMiddleware");

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', auth, adminMiddleware, ctrl.create);  // Middlewre para que solo admin pueda hacer post/put/delete de productos 
router.put('/:id', auth, adminMiddleware, ctrl.update);
router.delete('/:id', auth, adminMiddleware, ctrl.delete);

module.exports = router;