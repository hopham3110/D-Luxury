const express = require("express");
const dotenv = require('dotenv');
const mongoose  = require("mongoose");
const routes = require("./routes");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())


routes(app);

mongoose.connect(`${process.env.MONGO_DB}`)
  .then(() => {
    console.log('Connect Db success!')
  })
  .catch((err) => {
    console.log(err)
  })
console.log('first', `AdI0estb_3kHNYeqUCeMbSmS-viGndtNTxJ43Nyy4WZ1jZRPzySQoN1RHKfXu_5FSaMQB-7WfuWrCyD0`)  


app.listen(port, () => {
    console.log('Server is running in port: ', + port)
})