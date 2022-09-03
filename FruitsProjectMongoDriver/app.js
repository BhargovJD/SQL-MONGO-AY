const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

//   for insert
//   insertDocuments(db, function(){
//     client.close();
//   }) 


// for read
findDocuments(db, function(){
    client.close();
  }) 




});

// INSERT
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
      {name : "Apple", 
      score : 8, 
      review : "Good"
      },

      {name : "Orange",
      score : 6, 
      review : "Ok"
      },

      {name : "Banana", 
      score : 9, 
      review : "Great"
      }

    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3,result.insertedCount);
      assert.equal(3,Object.keys(result.insertedIds).length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

//   READ
const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits);
      callback(fruits);
    });
  }
