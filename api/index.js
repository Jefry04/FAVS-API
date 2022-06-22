const app = require ("./app")
const { connect } = require("./db")

const port = process.env.PORT || 8080;
//const port = process.env.APP_PORT;


connect();

app.listen (port, ()=>{
  console.log(`App running in por:${port}`)
})