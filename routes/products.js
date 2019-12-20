const {Router} = require('express');
const router = Router();

const { getProducts } = require('../controllers/productsController')

router.route('/').get(getProducts);

module.exports = router;
