'use strict';

const express = require('express');
const serveIndex = require('serve-index');

const app = express();

app.use(express.static('./'));
app.use(serveIndex('./', { 'icons': true, view: 'details' }));

let port = 8080;
app.listen(port, () => console.log('Express server listening on port ' + port));
