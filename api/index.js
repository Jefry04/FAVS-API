const app = require ("./app")
const { connect } = require("./db")

const port = process.env.APP_PORT;
const host = process.env.APP_URL;

connect();

app.listen (port, ()=>{
  console.log(`App running in ${host}:${port}`)
})