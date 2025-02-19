// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const cloudinary = require('cloudinary').v2;
// require("dotenv").config();

// // Configure Cloudinary with your credentials
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// // Define Cloudinary storage configuration for multer
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'uploads', // Cloudinary folder
//         format: async (req, file) =>"pdf", // supports promises as well
//         public_id: (req, file) => file.originalname.split('.')[0] // filename without extension
//     },
// });

// // Export the storage configuration
// const cloudinaryFileUploader = multer({ storage: storage });

// module.exports = { cloudinaryFileUploader };
const AWS = require('aws-sdk');

const uploadFileToS3 = async (file, bucketName) => {
    try {
        const s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });

        const newFileName = `bs_${Date.now().toString()}.${file.mimetype.split('/')[1]}`;

        const params = {
            Bucket: bucketName,
            Key: newFileName,
            Body: file.data
        };

        return new Promise((resolve, reject) => {
                        s3.upload(params, (err, data) => {
                if (err) {
                    console.error(err);
                    return reject(err);
                }
                console.log(data);
                resolve(data);
            });
        });

    } catch (e) {
        console.error(e);
        throw e;
    }
};

module.exports = { uploadFileToS3 };

