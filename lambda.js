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
