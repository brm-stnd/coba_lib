var express = require('express');
var router = express.Router();

const userArr = [
  {
    name: "farid",
    email: "farid@gmail.com"
  },
  {
    name: "bram",
    email: "bram@gmail.com"
  }
]

router.get('/users', function(req, res) {
  const result = {
    "result" : userArr
  }
  res.status(200).send(result);
});

router.post('/users', function(req, res) {
  userArr.push(req.body);
  const result = {
    "result" : userArr
  }
  res.send(result);
});

router.delete('/users/:name', function(req, res) {
  let name = req.params.name;

  var isiResult = userArr.filter(function(el) {
    return el.name == name;
  });

  const result = {
       "result" : isiResult
  }
  res.send(result);
});

router.put('/users/:name', function(req, res) {
  let name  = req.params.name;
  
  let isiResult = removeByAttr(userArr, 'name', name); 
  isiResult.push(req.body);
  
  const result = {
       "result" : isiResult
  }
  res.send(result);
});

var removeByAttr = function(arr, attr, value){
  var i = arr.length;
  while(i--){
     if( arr[i] 
         && arr[i].hasOwnProperty(attr) 
         && (arguments.length > 2 && arr[i][attr] === value ) ){ 

         arr.splice(i,1);

     }
  }
  return arr;
}




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res) {
  res.send('test berhasil');
});

router.get('/user/:username', function(req, res) {
  let username = req.params.username;
  res.send(username);
});

router.get('/tambah/:angka1/:angka2', (req, res)=> {
  let hasil = parseInt(req.params.angka1)+parseInt(req.params.angka2);
  //console.log(hasil)
  res.send(hasil.toString());
});

router.post('/body', function(req, res) {
  console.log(req.body);
  let data = req.body;
  res.send(data);
});

router.put('/postGoo', function(req, res) {
  console.log(req.body);
  let data = req.body;
  res.status(204).json(data);
});

router.delete('/del', function(req, res) {
  console.log(req.body);
  let data = req.body;
  res.json(data);
});

module.exports = router;
