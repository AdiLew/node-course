const path = require('path');
const express = require('express');


const app = express();

const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath));


//app.com
app.get('', (req, res)=>{
    res.send('Hey there!')

})

//app.com/weather
app.get('/weather',(req,res)=>{
    res.send({location: 'Tel Aviv', forecast:'It\'s gonna be hot and awesome'})
})


app.listen(3000, ()=>{
    console.log('The server is up on port 3000')
})