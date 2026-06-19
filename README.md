# 🚀 Serverless Offline Clone

A simplified implementation of the Serverless Offline framework built using Node.js. This project simulates key AWS Serverless components locally, including API Gateway, Lambda Functions, Lambda Context, Authorizers, and WebSocket APIs.

---

## 📌 Overview

Serverless Offline allows developers to test and debug AWS Lambda functions locally without deploying to AWS.

This project recreates the core architecture of Serverless Offline to understand how:

* API Gateway routes requests
* Lambda functions are invoked
* Lambda Context is generated
* Authorization is performed
* WebSocket connections are handled
* Events are transformed into AWS-compatible payloads

---

## 🏗️ Architecture

### HTTP Request Flow

```text
Client Request
      │
      ▼
 HttpServer (API Gateway)
      │
      ▼
 AuthorizerRunner
      │
      ▼
 HttpEventBuilder
      │
      ▼
 LambdaFunction
      │
      ▼
 LambdaContext
      │
      ▼
 Lambda Handler
      │
      ▼
 HTTP Response
```

### Lambda Invocation Flow

```text
POST /2015-03-31/functions/{name}/invocations
                    │
                    ▼
             LambdaServer
                    │
                    ▼
            LambdaFunction
                    │
                    ▼
              Handler
```

### WebSocket Flow

```text
WebSocket Client
        │
        ▼
WebSocket Server
        │
        ▼
Message Processing
```

---

## 📂 Project Structure

```text
serverless-offline/
│
├── src/
│   ├── http/
DevOps | Cloud | FPGA | Embedded Systems
│   ├── lambda/
│   ├── websocket/
│   ├── authorizer/
│   ├── utils/

│   └── index.js
│

Electronics & Telecommunication Engineer
├── examples/
├── tests/
├── package.json
└── README.md
**Sahil Thube**
```

---


## ✨ Features

## 👨‍💻 Author
### HTTP Server


* Simulates AWS API Gateway
* Route Handling
* Event Generation


---
* AWS Lambda Execution Flow
* API Gateway Event Structure
* WebSocket Communication
* Serverless Framework Internals
* Event-Driven Architecture
* Authorization Mechanisms

## 🎯 Learning Outcomes

---
* AWS Lambda Concepts
* API Gateway Concepts
* Hapi.js
* WebSocket
* Node.js
* JavaScript
Example:

## 🛠 Technologies Used



Response:

---
{
  "path": "/hello",
  "method": "GET"
-d '{"name":"Sahil"}'
```
```
http://localhost:3002/2015-03-31/functions/hello/invocations \
-H "Content-Type: application/json" \
### Lambda Context
Provides:
```bash
curl -X POST \

* Function Name
### Lambda Invocation

* Remaining Execution Time

```


Loads Lambda handlers dynamically using Node.js require().
### Lambda Invoke API
```bash
curl http://localhost:3000/hello

Endpoint:
```text
POST /2015-03-31/functions/{name}/invocations
```
Example:

```bash
curl -X POST \
http://localhost:3002/2015-03-31/functions/hello/invocations \
-H "Content-Type: application/json" \
```

### HTTP API


### Authorizer Support

## 🧪 Testing

Supports:

```

---
* Authorized Requests
* Unauthorized Requests (401)


WebSocket Server running on ws://localhost:3001
### WebSocket Server

Endpoint:


Lambda Server running on http://0.0.0.0:3002
```
```text
```bash
node src/index.js
```text
HTTP Server running on http://0.0.0.0:3000
ws://localhost:3001
```

Expected Output:



Supports:

Run all services:
* Client Connections
## ▶️ Running the Project

* Message Handling
* Real-Time Communication


---
---


## ⚙️ Installation
```

npm install

```bash
git clone https://github.com/Thube-Sahil/serverless-offline-clone.git

cd serverless-offline-clone
-d '{"name":"Sahil"}'



### Lambda Function Loader
* Request ID


}
  "message": "Hello from Lambda",
```json

```
curl http://localhost:3000/hello
```bash

