const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

//
//
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bpy2nre.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // all collection
    const productCollection = client
      .db("ecoMart")
      .collection("productCollection");
    const cartCollection = client.db("ecoMart").collection("cartCollection");
    const usersCollection = client.db("ecoMart").collection("all-users");
    const wishListCollection = client.db("ecoMart").collection("wishList");

    // POST METHOD

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const filter = { email: newUser.email };
      const isExist = await usersCollection.findOne(filter);
      if (isExist) {
        return res.send({
          messege: "user already exist in the bd",
          insertedId: null,
        });
      }
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    app.post("/cart", async (req, res) => {
      const cartData = req.body;
      console.log(cartData);
      const result = await cartCollection.insertOne(cartData);
      res.send(result);
    });
    app.post("/wishList", async (req, res) => {
      const wishData = req.body;
      console.log(wishData);
      const result = await wishListCollection.insertOne(wishData);
      res.send(result);
    });

// ========================== GET METHOD ================================
    
    app.get("/shop", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.send(result);
    });
    app.get("/shop/detail/:name", async (req, res) => {
      const name = req.params.name;
      const filter = { name: name };
      const result = await productCollection.findOne(filter);
      res.send(result);
    });
    app.get('/users',async(req,res)=>{
      const result= await usersCollection.find().toArray()
      res.send(result)
    })
    app.get('/wishList/:email',async(req,res)=>{
      const email=req.params.email;
      const filter={userEmail:email}
      const result= await wishListCollection.find(filter).toArray()
      res.send(result)
    })
    app.get('/cart/:email',async(req,res)=>{
      const email=req.params.email;
      const filter={userEmail:email}
      const result= await cartCollection.find(filter).toArray()
      res.send(result)
    })



//  ============================ DELETE =====================

    app.delete('/wishList/:id', async(req,res)=>{
      const id=req.params.id
      const filter={_id: new ObjectId(id)}
      const result = await wishListCollection.deleteOne(filter)
      res.send(result)
    })
    app.delete('/cart/:id', async(req,res)=>{
      const id=req.params.id
      const filter={_id: new ObjectId(id)}
      const result = await cartCollection.deleteOne(filter)
      res.send(result)
    })












    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("eco mart server is running..............");
});

app.listen(port, () => {
  {
    console.log(`server is running on port ${port}`);
  }
});
