const express = require('express')
const router = express.Router()
const { getReceipts, setReceipt, updateReceipt, deleteReceipt } = require('../controllers/receiptController')

router.route('/').get(getReceipts).post(setReceipt)
router.route('/:id').delete(deleteReceipt).put(updateReceipt)

module.exports = router