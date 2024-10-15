## Middlewares  
Usually when any request is made, some pre-checks take place to ensure that the intended user is accessing the endpoint.
1. Authentication - Whether the user is authorized to access the data
2. Correct Format of data - Whether the user is sending the right format of data for the server to understand.

We cannot perform this repeated task separately as part of our endpoint logic everytime, hence we use something called **middlewares**. 
The raw/brute force way to do it would be get the data using query params and authentication data in the headers.

Unlike manual checks, middlewares are pre-checks done before the actual business logic. 

### Syntax
`app.<method>("<endpoint>", {range of callback fns}, (req, res) => {})`
The range of callback fns are your middlewares. They take 3 params: (req, res, next)  
If the processing in that particular callback fn is successful, you can call next() which shifts the control to the next fn.   

#### Global Middlewares
`app.use(<method>)`. One common use-case would be `app.use(express.json())` which allows us to parse JSON inputs and access `req.body`

#### Global Catches 
During processing a request, if your logic leads to an error, the stack trace or error shouldn't be visible to the end user. And rather than catching error separately, we can define a global catch which is another type of middleware which catches all errors and they can be processed here.   
`app.use((err, req, res, next) => {
    //your logic here
})`