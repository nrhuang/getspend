const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.S3_ACCESS_KEY,
    accessKeyId: process.env.S3_ACCESS_SECRET,
    region: "us-east-2",
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        acl: "public-read",
        s3: s3,
        bucket: "getspend-receipt-images",
        metadata: function (req, file, cb) {
        cb(null, { fieldName: "TESTING_METADATA" });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        },
    }),
});

module.exports = upload;