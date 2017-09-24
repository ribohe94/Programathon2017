const express = require('express')
const app = express()
const Web3 = require('web3')
const bodyParser = require('body-parser')

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function (req, res) {
  var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.log(web3.eth.accounts[0])
  // console.log(web3)

  // var emails = ["a@a.com",...];

  // emails.map((e)=>web3.eth.new([e]));
// 
  res.send("testing web3")
  
})
app.post("/register",function(req,res) {
	var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	var emails = req.body.emails.split(",");
	console.log("EMAILS: ",emails)
	console.log(typeof emails)
	var e = ["a","b"]
	var accounts = emails.map((e)=>{
		var acc = web3.eth.accounts.create(e)
		console.log("acc",acc)
		return {email:e,privateKey:acc.privateKey,address:acc.address}
	})
	console.log("response: ",accounts)
	res.json(accounts)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


app.post("/sample",function(req,res){
	var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	res.json(["sample1@gmail.com","sample2@gmail.com","sample3@gmail.com"].map((e)=>{
		var acc = web3.eth.accounts.create(e)
		console.log("acc",acc)
		return {email:e,privateKey:acc.privateKey,address:acc.address}
	}))
})
