# Description
Circuit breaker for integrated services within AWS. 

# Design
- Upon initial request check if the current state of the circuit is open, per resource. ( State is being maintained currently in dynamoDb )
- If Open, reject immediately.
- If Closed, proceed.
- If Degraded, review current timeout until a request can be attempted again.
- Adapt RCAPI


# Current Status
TBD

# Technologies Used: 
- AWS Lambda
- AWS DynamoDB
- AWS Step Function ( future )

## TODO:
- Refactor the lambda methods so they're individual functions
- Potentially change DynamoDB to DynamoDB ( DAX ) and/or Elasticache
- AWS Step Function to designate state changes ( potentially remove the need for the storage layer at all with this )