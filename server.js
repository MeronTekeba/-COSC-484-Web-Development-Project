// create an express app
const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/api/members", async function (req, res) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  
  try {
    await client.connect();

    const database = client.db('oinkdb');
    const collection = database.collection('user');

    // Query for users aged 21
    const query = { age: 21 };
    const cursor = collection.find(query);
    const result = await cursor.toArray();

    return res.json(result);
    
  } catch(err) {
    console.log(err);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));