### Debouncing  
Used in input fields when the value keeps changing a request goes out to the backend for every input change. 
Sometimes a user might type very fast and this would lead to too many partial requests to the backend.
This is where the concept of DEBOUNCING comes to the picture.   
Simply means sending a delayed request to the backend after waiting for the input to complete. 

**Flow**
function call -> Debounced function -> Actual function  
debounced fn takes care of ensuring that the actual function is called after a delay. 

`let timeout;`
`const debouncedPopulateDiv = async () => {`
&emsp;&emsp;`clearTimeout(timeout)`
&emsp;&emsp;`timeout = setTimeout(() => {`
&emsp;&emsp;`populateDiv()`
&emsp;&emsp;`}, 100)`
`}`