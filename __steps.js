/**
 * 
 * ---------------
 * MongoDB Connection
 * ----------------
 * 1. Create account 
 * 2. create an user with password
 * 3.whitelist ip address
 * 4.database > connect > driver > Node > show all code
 *5. change the password the uri

 * --------------------------------
 * 1.CREATE  --- POST 
 * 2.app.post( '/ users'/async( req , res ) => {} )
 * 3.Make the function async to use await inside it 
 * 4.make sure you use the express.json() middleware
 * 5. access data from the body: const user =req.body
 * 6. const result =await useCollection.insertOne(user);
 * 7.res.send(result)
 * 
 * 
 * Client site
 * ------------------------
 * 1.create fetch
 * 2. add second parameter as an object
 * 3.provide method: 'POST 
 * 4.add headers: ' { content-type' : 'application.json"
 * 5. add body: JSON.Stringify(user)
 * 
 * 
 * -------------------------------
 * READ MANY
 * -------------------------
 * 1. create a cursor = userCollection.find()
 * 2.const  result = await cursor. toArray()
 *------------------------------------

 DELETE
 ----------------------------
 1. create app.delete('/users/;id', async(req,res) =>{})
 2. specify unique objectId to delete the right user id 
 3. const query = { _id : new ObjectId (id)}
 4.

 */