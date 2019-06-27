const geocode = require('./utils/geocode.js'),
    forecast = require('./utils/forecast.js'),
    chalk = require('chalk')


const location = process.argv[2];
if (process.argv.length == 2){
    return console.log('Please provide a location');
}

geocode(location, (error, data) => {
    if (error) {
        return console.log(error)
    }

    forecast(data.lat, data.lon, (fError, fData) => {
        if (error) {
            return console.log(`${chalk.red.underline('Error!')}\n${fError}`)
        }

        console.log(chalk.cyan.underline(`Current weather in ${data.placeName}`))
        console.log(fData)
    })
})


