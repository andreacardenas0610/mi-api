const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("../Config/db");
const userroute = require('./user.route');


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userroute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});