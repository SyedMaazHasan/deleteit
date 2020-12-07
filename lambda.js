

const awsServerlessExpress = require('aws-serverless-express');

//your node project code
const app = require('./src/server');
const yourNodeServer = awsServerlessExpress.createServer(app)


module.exports.myhandler = (event, context) => awsServerlessExpress.proxy(yourNodeServer, event, context);



//Lambda func structure
exports.handler = async function(event, context, callback) {
	
}



//ASYNC FUNCTION
exports.handler = async function(event, context, callback) {
	
  console.log('source which triggered this func passed query string param: ', event.key1);
  
  console.log('Remaining time: ', context.getRemainingTimeInMillis())
  console.log('Function name: ', context.functionName)
  
  return callback(null, "maaz")
}

//SYNCHRONOUS FUNCTION
exports.handler = function(event, context) {
	
  console.log('source which triggered this func passed query string param: ', event.key1);
  
  console.log('Remaining time: ', context.getRemainingTimeInMillis())
  console.log('Function name: ', context.functionName)
  
  return "maaz"
}
