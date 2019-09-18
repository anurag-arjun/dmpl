var express = require("express");
var app = express();
import * as controllers from './controllers';

app.get('/init', controllers.init)

app.listen(9001, () => {
    console.log("Server running on port 9001");
});