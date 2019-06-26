const request = require('request');

const forecast = (lat, lon, callback) => {
    const dsApiKey = '7a082462b8803c852b80c55f9012ed89',
        dsUrl = `https://api.darksky.net/forecast/${dsApiKey}/${lat},${lon}?units=si`

    request({ url: dsUrl, json: true }, (error, response) => {
        if (error) {
            callback('Could not connect to weather services :(')
        }
        else if (response.body.error) {
            callback(response.body.error)
        }
        else {
            const data = response.body.currently,
                currentForecast = `${response.body.daily.data[0].summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProbability * 100}% chance of rain.`;
            callback(undefined, currentForecast)
        }
    })


}

module.exports = forecast;