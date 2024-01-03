const express = require('express')
const router = express.Router()
const upload = require('../services/imageUpload')

router.post(
    "/",
    upload.single("image"),
    (req, res, next) => {
        let data = {}
        if (req.file) {
            data.image = req.file.location
        }
        res.status(200).json({data})
    }
)

module.exports = router