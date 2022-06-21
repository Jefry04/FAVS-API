require('dotenv').config();
const express = require("express");
const cors = require ("cors");
const userRouter = require ("./routes/user")
const listRouter = require ("./routes/list")
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./swagger');

const app = express();

app.use(express.json());
app.use(cors());

app.use ("/auth/local", userRouter);
app.use ("/favs", listRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports =  app;