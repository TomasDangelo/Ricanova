const express = require("express")
const router = express.Router()
const auth = require('../middlewares/authMiddleware')
const ctrl = require('../controllers/productController')

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', auth, ctrl.create);
router.put('/:id', auth, ctrl.update);

router.delete('/:id', auth, ctrl.delete);

module.exports = router;