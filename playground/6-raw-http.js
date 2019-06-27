const https = require('https')

const url = 'https://api.darksky.net/forecast/7a082462b8803c852b80c55f9012ed89/40,-75?units=si'

const request = https.request(url,(response)=>{
    let data = '';

    response.on('data', (chunk)=>{
        data = data+chunk.toString()
    })

    response.on('end', ()=> {
        const body = JSON.parse(data);
        console.log(body)
    })
})

request.on('error', (error)=>{
    console.log('An Error: ', error)
})

request.end();