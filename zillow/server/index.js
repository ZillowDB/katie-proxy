const express   = require('express');
const app       = express();
const httpProxy = require('http-proxy');
const apiProxy  = httpProxy.createProxyServer();
const sung      = 'http://127.0.0.1:4000',
      michelle  = 'http://127.0.0.1:3003',
      mona      = 'http://127.0.0.1:3000',
      javier    = 'http://127.0.0.1:8080';
const port      = 5000;
 
app.use(express.static(__dirname + '/../'));

app.all('/nearbyHomes', (req, res) => {
    console.log('redirecting to Sung: nearby home');
    apiProxy.web(req, res, {target: sung});
});

app.all('/images/:houseID', (req, res) => {
    console.log('redirecting to Michelle: carousel');
    apiProxy.web(req, res, {target: michelle});
});

app.all('/api/homes/1/prices', (req, res) => {
    console.log('redirecting to Mona: calculator');
    apiProxy.web(req, res, {target: mona});
});

app.all('/api/homes/:index/detail-information', (req, res) => {
    console.log('redirecting to javier: body-part');
    apiProxy.web(req, res, {target: javier});
});

app.all('/api/user-request', (req, res) => {
    console.log('redirecting to javier: user request');
    apiProxy.web(req, res, {target: javier});
});


app.listen(port, ()=>{
	console.log('listening on ', port)
});