const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://dbUser:XqCDl4vioU1xtvCV@portallibras.zhcz0.mongodb.net/portallibras?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "dbUser";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("conta");

         // Construct a document                                                                                                                                                              
         let personDocument = ([{
             "username": "Nicoli Ferreira",
             "email": "nikafworks@gmail.com",                                                                                                                                
             "password": "123456",                                                                                                                                   
             "state": "São Paulo"
         },
        {
            "username": "João Victor",
            "email": "joaovf30@gmail.com",                                                                                                                                
            "password": "123456",                                                                                                                                 
            "state": "São Paulo"
        }
        ])

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertMany(personDocument);
         // Find one document
         const myDoc = await col.find();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);