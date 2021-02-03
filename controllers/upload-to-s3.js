const aws = require('aws-sdk');
const fs = require('fs');
const checkMulterParams = require('./check-multer-params');


aws.config.setPromisesDependency();
aws.config.update({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  region: process.env.REGION
});


const getParams = (folderName, multerParamsObject) => {
  return {
    ACL: 'public-read',
    Bucket: process.env.BUCKET,
    Body: fs.createReadStream(multerParamsObject.filePath),
    ContentType: `${multerParamsObject.contentType}`,
    Key: `${folderName}/${multerParamsObject.filename}`
  };
};

const uploadToS3 = ({ file, folderName }) =>
  new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('File required'));
    }
    const s3 = new aws.S3();
    let multerCheckReturnValue = checkMulterParams(file); // value returned after multer params are checked
    const paramsArray = [];
    if (Array.isArray(file)) {
      for (let item of multerCheckReturnValue) {
        const params = getParams(folderName, item);
        s3.upload(params, (err, data) => {
          if (err) {
            reject(err);
          }

          if (data) {
            fs.unlinkSync(item.filePath);
            paramsArray.push(data.Location);
            if (paramsArray.length === multerCheckReturnValue.length) {
              // Don't resolve until all uploads have been completed.
              resolve(paramsArray);
            }
          }
        });
      }
    } else {
      const params = getParams(folderName, multerCheckReturnValue);

      s3.upload(params, (err, data) => {
        if (err) {
          reject(err);
        }

        if (data) {
          fs.unlinkSync(multerCheckReturnValue.filePath);
          resolve(data.Location);
        }
      });
    }
  });



module.exports = uploadToS3;
