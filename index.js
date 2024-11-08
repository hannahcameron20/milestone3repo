let express = require("express");
let app = new express();
app.set("view engine","ejs");

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
 host:"terraform-20241108005603449600000006.cj44a88eg9cv.us-east-2.rds.amazonaws.com",
 user: "admin",
 password: "LetsDeploy01",
 database:"Donuts",
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

