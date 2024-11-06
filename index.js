require('dotenv').config();

let express = require("express");
let app = new express();
app.set("view engine","ejs");

// set up database connection
const knex = require("knex")({
client: "mysql",
connection: {
host: process.env.DB_ENDPOINT,
user: "admin",
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
port: 3306,
},
});

app.get("/",(req,res) => {
knex
.select()
.from("Products")
.then((result) => {
console.log(result);
res.render("index",{aDonutList:result});
});
});
app.listen(3000);
