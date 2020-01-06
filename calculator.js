const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
});
   
app.post("/", (req,res) => { 
   var num1 = Number(req.body.num1)
   var num2 = Number(req.body.num2)
   var total = num1 + num2
   res.send("The result of your calculation is " + total)
 })



app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))