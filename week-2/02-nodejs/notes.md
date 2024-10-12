## Week 2 Notes

### What is ECMAScript (ES)
It is a scripting language specification. Serves as the guidelines for scripting language design.  
Versions - ES5, ES6, ES2017

### What is JavaScript
Scripting Language that conforms to ECMAScript spec.
Most widely known and used implementation of ECMAScript.
Includes features beyond ES - DOM manipulation, setTimeout, fs, webapi

### JavaScript Compilers 
* v8 - Chromium - written in C
* spidermonkey - Firefox - written in C + Rust

### What is NodeJS
Used the v8 engine as the base, added some essential backend (like filesystem reads) on top to create a new runtime called NodeJS.
It is not a language, rather a runtime.
Written in C/C++
#### What can be done using NodeJS?
1. Create CLIs
2. Create a video player
3. Create a game
4. Create an HTTP Server

### What is Bun?
Competitor of NodeJs.
Written in Zig. 
Significantly faster runtime.

### HTTP Server
Hyper-Text Transfer Protocol
Defined for machines to communicate.
Specifically for websites, it is the most common way for your websit's frontend to talk to its backend. 
WebRTC - Web Communication

Frontend (Client) <-> Backend (Server)

**Frontend** -> Client should know {Protocol [HTTP/HTTPS], Address [location of server - URL:PORT, WebRTC, WS], Route [tap into specific functionality of server], (Headers, Body, Query Params => Makeup request content), Method [GET, POST, PUT, DELETE, PATCH, OPTIONS, TRACE]}  

**Backend** -> Server should know {Response Headers, Response Body, Status Codes [1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client error), 5xx (Server error)]}

#### What happens when you hit http://www.google.com

(**Browser Level**)
1. Browser parses the url
2. Does a DNS (Domain Name Server) : converts url -> IP 
    IP Address is the location of a server in the internet.
3. Establishes a connection with the server (OSI Layer - 5 layers - handshake protocol)

(**Server**)
1. You get the request - route, body, header **=> Request**
2. You perform some logic or computation and get the output
3. Return the output with headers, status code and body **=> Response**