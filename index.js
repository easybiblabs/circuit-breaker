const AWS      = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({
    api_version: '2012-08-10',
    region: process.env.CHEGG_REGION
});

const fetch    = require('./fetch');
const put      = require('./put');
const runState = require('./state');
const tableName= process.env.CHEGG_TABLE;

exports.handler = async(event, context) => {
  let params = JSON.parse(event.body);
  switch (event.httpMethod){
    case 'GET':
      return fetch(params.appName, tableName, dynamoDb);
      break;
    case 'POST':
      const putEvent = {
        requestId: context.awsRequestId,
        appName: params.appName,
        path: params.path,
        status: params.status
      };
      return put(putEvent, tableName, dynamoDb);
      break;
    default:
      break;
  }
};