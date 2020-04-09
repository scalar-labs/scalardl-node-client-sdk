# Web-node validation
This sample code is to validate that the serialized binary generated on the web-sdk client side can be executed on the node-sdk side.

In conclusion, the listContracts request sent by Web SDK can be executed by ScalarDLT if the
`ClientProperties` provided by the Web SDK is appropriate. 

## Project Prerequisite
Make sure your ScalarDLT server is up and running by running from [here](https://github.com/scalar-labs/indetail/pull/553) (`IstPoc/poc-2/ScalarDLTServer/app`):
```
./app up
```

## Spin up node server
```
node node-server.js
```
##
The Scalardl web client request can be invoked via the html file [here](./web-client/index.html)