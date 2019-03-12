require("dotenv").config();
var keys = require("./keys.js");

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.MYSQL_PW,
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  queryAllItems();


});

function queryAllItems() {
  console.log("-----------------------------------");
  connection.query("SELECT * FROM products", function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_ID + " | " + res[i].name + " | $" + res[i].price)
    }
    console.log("-----------------------------------");

    start();
  });
}

function start() {

  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

  inquirer
    .prompt([
      {
      type: "input",
      message: "Please Select the ID of the item you'd like to purchase.",
      name: "itemID"
    },
    {
      type: "input",
      message: "How many would you like to buy?",
      name: "Quantity"
    }
  ])
    .then(function (answer) {
      
     
      
      var newQuantity = results[answer.itemID - 1].stock_quantity - parseInt(answer.Quantity);
      // console.log(answer.itemID);
      // console.log(answer.Quantity);
      // console.log(results[answer.itemID - 1].item_ID);
      // console.log(results[answer.itemID - 1].stock_quantity);
      if (answer.Quantity > results[answer.itemID - 1].stock_quantity ){
        console.log("-----------------------------------");
        console.log("Sorry, we only have " + results[answer.itemID - 1].stock_quantity + " of that those.");
        queryAllItems();
      } else {
        var userPrice = results[answer.itemID - 1].price*answer.Quantity;
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: newQuantity
            },
            {
              item_ID: answer.itemID
            }
          ],
          function(error) {
            if (error) throw err;
            console.log("-----------------------------------");
            console.log("Thank you for your purchase! You have been charged $" + userPrice + ". " + newQuantity + " of that item remain.");
            queryAllItems();
          }
        );
      }

    });
  });
};