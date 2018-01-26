'use strict';

// as per spec at 
module.exports.error = (code, error, callback) => {
  let data = error;
  if (error.message) {
    data = error.message
  }
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
    isBase64Encoded: false,
    statusCode: code ? code : 200,
    body: JSON.stringify({
      success: false,
      code,
      data
    })
  });
};
