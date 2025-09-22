const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sender("home");
});

app.post("/send-email", (req, res) => {
  const { recipient, subject, message } = req.body;

  nodemailer.createTransport;
});
