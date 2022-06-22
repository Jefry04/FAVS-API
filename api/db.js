const mongoose = require("mongoose");

let connection;

async function connect() {
  if (connection) return;

  const uri = process.env.MONGO_URI;

  connection = mongoose.connection;

  connection.once("open", () => {
    console.log(`Connection with mongo in ${uri}`);
  });
  connection.on("disconnected", () => {
    console.log("Succesfully disconected!");
  });
  connection.on("error", (err) => {
    console.log("Something went wrong!", err);
  });

  await mongoose.connect(uri)
}

async function disconected (){
  if(!connection) return;

  await mongoose.disconnect();
}

async function cleanup() {
  for (const collection in connection.collections){
    await connection.collections[collection].deleteMany({});
  }
}

module.exports = { connect, disconected, cleanup };
