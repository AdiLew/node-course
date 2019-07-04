const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));



//app.com
app.get('', (req, res)=>{
    //res.send('Hey there!')
    res.render('index',
    {
        title:'Weather App',
        name: 'Adi'
    })

})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About Us',
        something: 'Pizza'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help Page!',
        helpMessage: "Here's where you get help."
    })
})

//app.com/weather
app.get('/weather',(req,res)=>{
    res.send({location: 'Tel Aviv', forecast:'It\'s gonna be hot and awesome'})
})

app.get('/help/*',(req, res)=>{
    res.render('404', {
        title: 'Oh no!',
        error: 'Support article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: 'Oh no!',
        error:'Page not found :('
    })
})

app.listen(3000, ()=>{
    console.log('The server is up on port 3000')
})
