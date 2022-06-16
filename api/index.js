require('dotenv').config();
const express = require("express");
const cors = require ("cors");

const app = express();

const port = process.env.APP_PORT;
const host = process.env.APP_URL;

app.use(express.json());

app.listen (port, ()=>{
    console.log(`App running in ${host}:${port}`)
})