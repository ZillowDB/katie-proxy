const express       = require('express');
const app           = express();
const httpProxy     = require('http-proxy');
const apiProxy      = httpProxy.createProxyServer();
const neighber      = 'http://127.0.0.1:4000',
      imageCarousel = 'http://127.0.0.1:3003',
      calculator    = 'http://127.0.0.1:3000',
      detail        = 'http://127.0.0.1:8080';
const port          = 5000;
 
app.use( '/', express.static(__dirname + '/../'));
app.use( '/zillow/:id', express.static(__dirname + '/../'));

app.all('/nearbyHomes', (req, res) => {
    console.log('redirecting to nearby home information');
    apiProxy.web(req, res, {target: neighber});
});

app.all('/images/:houseID', (req, res) => {
    console.log('redirecting to image carousel');
    apiProxy.web(req, res, {target: imageCarousel});
});

app.all('/api/homes/1/prices', (req, res) => {
    console.log('redirecting to montly payment calculator');
    apiProxy.web(req, res, {target: calculator});
});

app.all('/api/homes/:index/detail-information', (req, res) => {
    console.log('redirecting to detail body-part');
    apiProxy.web(req, res, {target: javier});
});

app.all('/api/user-request', (req, res) => {
    console.log('redirecting to get user request');
    apiProxy.web(req, res, {target: detail});
});


app.listen(port, ()=>{
	console.log('listening on ', port)
});