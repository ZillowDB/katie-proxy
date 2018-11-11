const express       = require('express');
const app           = express();
const httpProxy     = require('http-proxy');
const Detail        = require('./db/Detail.js');
const bodyParser    = require('body-parser');
const UserRequest   = require('./db/UserRequest.js');
const apiProxy      = httpProxy.createProxyServer();
const neighbor      = 'http://ec2-13-56-210-238.us-west-1.compute.amazonaws.com/',
      imageCarousel = 'http://ec2-52-53-188-116.us-west-1.compute.amazonaws.com/',
      calculator    = 'http://ec2-18-222-111-239.us-east-2.compute.amazonaws.com/';
      
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

//proxies
app.all('/nearbyHomes', (req, res) => {
    console.log('redirecting to nearby home information');
    apiProxy.web(req, res, {target: neighbor});
});

app.all('/images/:houseID', (req, res) => {
    console.log('redirecting to image carousel');
    apiProxy.web(req, res, {target: imageCarousel});
});

app.all('/api/homes/1/prices', (req, res) => {
    console.log('redirecting to montly payment calculator');
    apiProxy.web(req, res, {target: calculator});
});

//api endpoints
app.get('/api/homes/all/detail-information', (req, res) => {
    Detail.find({})
        .then(data => {
            res.send(data);
        });
  });
  
//get one detail
app.get('/api/homes/:index/detail-information', (req, res) => {
    console.log(req.params);
    Detail.findOne({_index: req.params.index})
        .then(data => {
            res.send(data);
        });
});  

// user-request
app.post('/api/user-request', (req, res) => {
    let data = req.body.data;
    let eachPhone = Number(data.phone);
    UserRequest.findOne({ phone: eachPhone })
        .then(result => {
        if(!eachPhone){
            throw 'Please Fill the Form';
        }else if(!result){
            UserRequest.create(data)
            .then( result => {
                console.log('SEND OK: ', result);
                res.send(result);
            })
            }else{
                throw 'You already made an offer!';
            }
        })
        .catch(err => {
            res.send(err);
        })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('intergrated app working on ', port);
});