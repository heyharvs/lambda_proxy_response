'use strict';

// as per spec at 
module.exports.error = (code, error, callback) => {
  callback(null, {
    isBase64Encoded: false,
    statusCode: code ? code : 500,
    body: JSON.stringify({
      success: false,
      code,
      error
    })
  });
};

// optional for successfui requests
module.exports.ok = (code, data, callback) => {
  callback(null, {
    success: true,
    code,
    data
  });
};
