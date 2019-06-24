const request = require('request');

const url = 'https://api.darksky.net/forecast/7a082462b8803c852b80c55f9012ed89/37.8267,-122.4233'

request({url, json:true}, (error, response)=>{
    if(error){return console.log(error)}
    const data = response.body.currently;
    console.log(data)
})