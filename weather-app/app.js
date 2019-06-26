const geocode = require('./utils/geocode.js')

// const darkSkyApiKey = '7a082462b8803c852b80c55f9012ed89',
//     mapBoxApiKey = 'pk.eyJ1IjoiYWRpbGV3IiwiYSI6ImNqeGM3ZmlzdzAwZ28zcHF3c3V5bXJqaXkifQ.i1PV3F_Hi8fNe-1pubTUsQ',
//     mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapBoxApiKey}&limit=1`,

//     statLat = 31.343,
//     statLon = -18.23
// dsUrl = `https://api.darksky.net/forecast/${darkSkyApiKey}/${statLat},${statLon}?units=si`

// request({ url: dsUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Could not connect to Dark Sky')
//     }
//     else if (response.body.error) {
//         console.log('WTF just happened?')
//     }
//     else {
//         const data = response.body.currently;
//         console.log(`${response.body.daily.data[0].summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProbability * 100}% chance of rain.`)
//     }
// })




geocode('Tel Aviv', (error, data) => {
    console.log('Error',error)
    console.log('Data',data)
})