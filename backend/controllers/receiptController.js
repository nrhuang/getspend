const asyncHandler = require('express-async-handler')

// @desc    Get receipts
// @route   GET /api/receipts
// @access  Private
const getReceipts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get receipts' })
})

// @desc    Set receipt
// @route   POST /api/receipts
// @access  Private
const setReceipt = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
})

// @desc    Update receipt
// @route   PUT /api/receipts/:id
// @access  Private
const updateReceipt = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update receipt ${req.params.id}` })
})

// @desc    Delete receipt
// @route   DELETE /api/receipts/:id
// @access  Private
const deleteReceipt = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete receipt ${req.params.id}` })
})

module.exports = {
    getReceipts,
    setReceipt,
    updateReceipt,
    deleteReceipt,
}