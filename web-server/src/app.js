const express = require('express');

const app = express();

//app.com
app.get('', (req, res)=>{
    res.send('Hey there!')

})

//app.com/help
app.get('/help', (req, res)=>{
    res.send('Help Page <3')
})

//app.com/about

app.get('/about', (req, res)=>{
    res.send ('<h1 style="font-family: Verdana;">About us</h1>')
    
})


//app.com/weather
app.get('/weather',(req,res)=>{
    res.send('<h1 style="font-family: Verdana;">Weather App!!!!</h1>')
})


app.listen(3000, ()=>{
    console.log('The server is up on port 3000')
})