exports.handler = async function(event, context, callback) {
	
  console.log('source which triggered this func passed query string param: ', event.key1);
  
  console.log('Remaining time: ', context.getRemainingTimeInMillis())
  console.log('Function name: ', context.functionName)
  
  return context.logStreamName
}
