module.exports = async (event, tableName, dynamoDb) => {
    var params = {
      TableName: tableName,
      Item: {
        'id': event.requestId,
        'appName': event.appName,
        'path': event.path,
        'status': event.status
      }
    }; 
    return await new Promise((resolve, reject) => {
      dynamoDb.put(params, (err, data) => {
         if (err) {
           resolve({ statusCode: 400, body: `${err.stack}`, headers: { 'Content-Type': 'application/json' } })
         }else{
           resolve({ statusCode: 200, body: JSON.stringify(params.Item), headers: { 'Content-Type': 'application/json' }})
         }
      });
    });
};