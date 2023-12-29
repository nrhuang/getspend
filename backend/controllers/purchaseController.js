const asyncHandler = require('express-async-handler')

const Purchase = require('../models/purchaseModel')

// @desc    Get purchases
// @route   GET /api/purchases
// @access  Private
const getPurchases = asyncHandler(async (req, res) => {
    const purchases = await Purchase.find()
    res.status(200).json(purchases)
})

// @desc    Set purchase
// @route   POST /api/purchases
// @access  Private
const setPurchase = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    
    const purchase = await Purchase.create({
        text: req.body.text,
    })
    
    res.status(200).json(purchase)
})

// @desc    Update purchase
// @route   PUT /api/purchases/:id
// @access  Private
const updatePurchase = asyncHandler(async (req, res) => {
    const purchase = await Purchase.findById(req.params.id)
    
    if (!purchase) {
        res.status(400)
        throw new Error('Purchase not found')
    }
    
    const updatedPurchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true, })
    
    res.status(200).json(updatedPurchase)
})

// @desc    Delete purchase
// @route   DELETE /api/purchases/:id
// @access  Private
const deletePurchase = asyncHandler(async (req, res) => {
    const purchase = await Purchase.findById(req.params.id)
    
    if (!purchase) {
        res.status(400)
        throw new Error('Purchase not found')
    }
    
    await purchase.deleteOne()
    
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getPurchases,
    setPurchase,
    updatePurchase,
    deletePurchase,
}