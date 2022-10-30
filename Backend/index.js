const express = require('express');
const cors = require('cors');
const db = require("./database/index")

const products = require("./routes/products");
const cookieParser = require('cookie-parser');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: ["http://localhost:3000"],credentials : true }))
app.use(cookieParser())

app.use("/products",products)

const port = 3002;


app.listen(port,() => console.log(`Server is running on ${port}` ));
