require('dotenv').config();
const express = require("express");
const cors = require ("cors");
const { connect } = require("./db")

const app = express();

const port = process.env.APP_PORT;
const host = process.env.APP_URL;

connect();

app.use(express.json());
app.use(cors());

app.listen (port, ()=>{
  console.log(`App running in ${host}:${port}`)
})