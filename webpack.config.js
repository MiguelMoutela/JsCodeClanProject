const config = {
 entry: `${ __dirname }/client/src/app.js`,
 output: {
   filename: 'bundle.js',
   path: `${ __dirname }/client/public`
 },
 devtool: 'source-map'
}

module.exports = config;
