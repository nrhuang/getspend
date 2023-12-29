const express = require('express')
const router = express.Router()
const { getPurchases, setPurchase, updatePurchase, deletePurchase } = require('../controllers/purchaseController')

router.route('/').get(getPurchases).post(setPurchase)
router.route('/:id').delete(deletePurchase).put(updatePurchase)

module.exports = router