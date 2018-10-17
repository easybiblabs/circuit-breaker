module.exports = async (appName, tableName, dynamoDb) => {
    var params = {
      TableName: tableName,
      IndexName: 'appName-index',
      KeyConditionExpression: "appName = :appName",
      ExpressionAttributeValues: {
        ":appName": appName
      }
    }; 
    return await new Promise((resolve, reject) => {
      dynamoDb.query(params, (err, data) => {
         if (err) {
           resolve({ statusCode: 400, body: `Could not retrieve message: ${err.stack}`, headers: { 'Content-Type': 'application/json' } })
         }else{
           resolve({ statusCode: 200, body: data.Items, headers: { 'Content-Type': 'application/json'}})
         }
      });
    });
};