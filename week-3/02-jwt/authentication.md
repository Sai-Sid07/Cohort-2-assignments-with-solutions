## Authentication

### 1. Hashing  
Converting data to another form which is moslty not human readable. 
This is done through a Hash Function. Always remember that the same input will get the same hash. 
You always store the hashed version of confidential data in the database. 
Authentication is done by comparing hashed version of input with the hash stored in the database.
It is one way, you can convert the string to hash but never get the string from hash.
### 2. Encryption  
Unlike hashing, this is two-way. But you can get the original data back by having the key. 
Data -> Encrypted -> Stored in Db
Stored in Db -> Decrypted using secret key -> Data
### 3. JWT (JSON Web Tokens)  
Takes JSON as an input. Returns a large string which is called a **TOKEN**. It is used in the Web.
Unlike hashing or encryption, whoever has the token can still look at the original data by decoding it without any secret keys.
But verification (`jwt.verify()`) can be done by the system if it has the password along with the token. That is why most Backend Servers verify the JWT rather than decoding it. 
JWT is a digital signature, it is neither Hashing nor Encryption. 
### 4. Local Storage  
Browser storage which is used to store tokens which can be relayed along with every request made to that server. 