
const express = require("express");
const cors = require('cors');
const version = "v1";
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { addObject } = require("./requests/addObject");
const { getToken } = require("./requests/getToken");
const { addCategory } = require("./requests/addCategory");
const { addUser } = require("./requests/addUser");
const { logUserin } = require("./requests/logUserin");
const { getItems } = require("./requests/getIems");
const { getItem } = require("./requests/getItem");
const { getCategory } = require("./requests/getCategory");
const { editObject } = require("./requests/editObject");


app.use(cors());

app.use(bodyParser.json());

app.post(`/${version}/addObject`, (req, res, next) => {
    res.json(addObject(req));
});

app.post(`/${version}/addCategory`, (req, res, next) => {
    res.json(addCategory(req));
});

app.post(`/${version}/addUser`, (req, res, next) => {
    res.json(addUser(req));
});

app.post(`/${version}/logUserin`, (req, res, next) => {
    res.json(logUserin(req));
});

app.post(`/${version}/getItems`, (req, res, next) => {
    res.json(getItems(req));
});


app.post(`/${version}/getItem`, (req, res, next) => {
    res.json(getItem(req));
});

app.post(`/${version}/getCategory`, (req, res, next) => {
    res.json(getCategory(req));
});

app.post(`/${version}/editObject`, (req, res, next) => {
    res.json(editObject(req));
});




app.get("/", (req, res) => {
    res.send("404");
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
