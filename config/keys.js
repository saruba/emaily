if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}

// mongoURI: 'mongodb://potato:M3tnC4EX3VBkiNAGGsos@ds163119.mlab.com:63119/saruba-emaily-prod'
// googleClientSecret: 'bYt4-hepARWkaz5iqjVHC_iK',
// googleClientID:
//   '220837806407-2l2dr390b1b10ki8991tuskkjdhrhd1p.apps.googleusercontent.com',
