// create an express app
const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://keem:Stormwater32@cosc484-oink.wjezri1.mongodb.net/sample_mflix?retryWrites=true&w=majority";

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/api/members", async function (req, res) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  
  try {
    await client.connect();

    const database = client.db('oinkdb');
    const collection = database.collection('user');

    // Query for a movie that has the title 'Back to the Future'
    const query = { age: 21 };
    const cursor = await collection.aggregate([
      { $match: query },
      { $sample: { size: 1 } },
      { $project: 
        {
          title: 1,
          fullplot: 1,
          poster: 1
        }
      }
    ]);

    const movie = await cursor.next();

    return res.json(movie);
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
