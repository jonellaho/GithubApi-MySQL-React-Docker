require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const Routes = require('./app/routes/index');
const db = require("./app/models");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ status: 404, message: err.message }); // Bad request
  }
  next();
});

db.sequelize.sync();

app.use((req, res, next) =>  {
  req.models = db;
  res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

const PORT = 8080;

app.use('/api' , Routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
