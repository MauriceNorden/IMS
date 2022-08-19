
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
const { getAllitems } = require("./requests/getAllitems");


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

app.post(`/${version}/getAllitems`, (req, res, next) => {
    res.json(getAllitems(req));
});


app.post(`/${version}/getToken`, (req, res, next) => {
    res.json(getToken(req));
});

app.get("/", (req, res) => {
    res.send("404");
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
